import type { ZodType } from 'zod';
import { getStorageBackend, removeAllWithPrefix } from './adapter';

export interface KeyValueStore<TValue> {
  get: (schema: ZodType<TValue>) => Promise<TValue | null>;
  set: (value: TValue) => Promise<void>;
  remove: () => Promise<void>;
}

export function createKeyValueStore<TValue>(key: string): KeyValueStore<TValue> {
  const backend = getStorageBackend();
  const storageKey = `flowhub-${key}`;
  return {
    get: async (schema: ZodType<TValue>) => {
      const candidate = await backend.getItem(storageKey);
      const result = schema.safeParse(candidate);
      return result.success ? result.data : null;
    },
    set: async (value: TValue) => {
      await backend.setItem(storageKey, value);
    },
    remove: async () => {
      await backend.removeItem(storageKey);
    },
  };
}

export async function removeAll(): Promise<void> {
  await removeAllWithPrefix('flowhub-');
}
