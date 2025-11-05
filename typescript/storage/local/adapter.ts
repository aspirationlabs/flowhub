export type StorageBackendKind = 'localStorage' | 'chromeStorage' | 'memory';

export interface StorageBackend {
  kind: StorageBackendKind;
  getItem: (key: string) => Promise<unknown | null>;
  setItem: (key: string, value: unknown) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export interface StorageErrorPayload {
  code?: string;
  key?: string;
  storedValue?: string | null;
  cause?: unknown;
}

function withMetadata<T extends Error>(
  error: T,
  metadata: Omit<StorageErrorPayload, 'cause'> & { cause?: unknown },
): T & StorageErrorPayload {
  const enhanced = error as T & StorageErrorPayload;
  enhanced.code = metadata.code;
  enhanced.key = metadata.key;
  enhanced.storedValue = metadata.storedValue ?? null;
  if ('cause' in metadata && metadata.cause !== undefined) {
    (enhanced as Error & { cause?: unknown }).cause = metadata.cause;
    enhanced.cause = metadata.cause;
  }
  return enhanced;
}

export function isParseError(error: unknown): error is StorageErrorPayload {
  return Boolean(
    error &&
      typeof error === 'object' &&
      (error as StorageErrorPayload).code === 'LOCAL_STORAGE_PARSE_ERROR',
  );
}

export function isSerializationError(error: unknown): error is StorageErrorPayload {
  return Boolean(
    error &&
      typeof error === 'object' &&
      (error as StorageErrorPayload).code === 'LOCAL_STORAGE_SERIALIZE_ERROR',
  );
}

function createLocalStorageBackend(storage: Storage): StorageBackend {
  return {
    kind: 'localStorage',
    getItem: async (key: string) => {
      const raw = storage.getItem(key);
      if (raw === null) {
        return null;
      }
      try {
        return JSON.parse(raw);
      } catch (error) {
        throw withMetadata(new Error('Failed to parse stored value.'), {
          code: 'LOCAL_STORAGE_PARSE_ERROR',
          key,
          storedValue: raw,
          cause: error,
        });
      }
    },
    setItem: async (key: string, value: unknown) => {
      try {
        storage.setItem(key, JSON.stringify(value));
      } catch (error) {
        throw withMetadata(new Error('Failed to serialise stored value.'), {
          code: 'LOCAL_STORAGE_SERIALIZE_ERROR',
          key,
          cause: error,
        });
      }
    },
    removeItem: async (key: string) => {
      storage.removeItem(key);
    },
  };
}

function createChromeStorageBackend(chromeStorageLocal: any): StorageBackend {
  return {
    kind: 'chromeStorage',
    getItem: async (key: string) => {
      const data = await new Promise<Record<string, unknown>>((resolve) => {
        chromeStorageLocal.get([key], (items: Record<string, unknown>) => {
          resolve(items ?? {});
        });
      });
      return data?.[key] ?? null;
    },
    setItem: async (key: string, value: unknown) => {
      await new Promise<void>((resolve) => {
        chromeStorageLocal.set({ [key]: value }, () => resolve());
      });
    },
    removeItem: async (key: string) => {
      await new Promise<void>((resolve) => {
        chromeStorageLocal.remove([key], () => resolve());
      });
    },
  };
}

const memoryStore = new Map<string, unknown>();

function createMemoryBackend(): StorageBackend {
  return {
    kind: 'memory',
    getItem: async (key: string) => (memoryStore.has(key) ? memoryStore.get(key)! : null),
    setItem: async (key: string, value: unknown) => {
      memoryStore.set(key, value);
    },
    removeItem: async (key: string) => {
      memoryStore.delete(key);
    },
  };
}

function getLocalStorageIfAvailable(): Storage | null {
  return typeof window !== 'undefined' ? window.localStorage : null;
}

export function getStorageBackend(): StorageBackend {
  const chromeApi = (globalThis as unknown as { chrome?: any }).chrome;
  const chromeStorageLocal = chromeApi?.storage?.local;
  const local = getLocalStorageIfAvailable();

  if (local) return createLocalStorageBackend(local);
  if (chromeStorageLocal) return createChromeStorageBackend(chromeStorageLocal);
  return createMemoryBackend();
}

export async function removeAllWithPrefix(prefix: string): Promise<void> {
  const chromeApi = (globalThis as unknown as { chrome?: any }).chrome;
  const chromeStorageLocal = chromeApi?.storage?.local;
  const local = getLocalStorageIfAvailable();

  if (local) {
    for (let i = local.length - 1; i >= 0; i--) {
      const key = local.key(i);
      if (key && key.startsWith(prefix)) {
        local.removeItem(key);
      }
    }
    return;
  }

  if (chromeStorageLocal) {
    const items: Record<string, unknown> = await new Promise((resolve) => {
      chromeStorageLocal.get(null, (data: Record<string, unknown>) =>
        resolve(data ?? {}),
      );
    });
    const keys = Object.keys(items).filter((k) => k.startsWith(prefix));
    if (keys.length === 0) return;
    await new Promise<void>((resolve) => {
      chromeStorageLocal.remove(keys, () => resolve());
    });
    return;
  }
  for (const key of Array.from(memoryStore.keys())) {
    if (key.startsWith(prefix)) {
      memoryStore.delete(key);
    }
  }
}
