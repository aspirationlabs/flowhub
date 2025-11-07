'use client';

import { Theme } from 'types/theme';
import { z } from 'zod';
import { createKeyValueStore } from '../../../storage/local/keyValueStore';
import type { StorageErrorPayload } from '../../../storage/local/adapter';
import { isParseError, isSerializationError } from '../../../storage/local/adapter';
import { LocalStorageKey } from '../../../storage/local/keys';

export type SystemPreferences = {
  theme: Theme;
};

const DEFAULT_PREFERENCES: SystemPreferences = {
  theme: 'light',
};

const SystemPreferencesSchema = z.object({
  theme: z.custom<Theme>(
    (value): value is Theme => value === 'light' || value === 'dark',
  ),
});

function mergePreferences(partial: Partial<SystemPreferences>): SystemPreferences {
  return {
    ...DEFAULT_PREFERENCES,
    ...partial,
  };
}

function resolveSystemTheme(): Theme {
  if (typeof window === 'undefined') {
    return DEFAULT_PREFERENCES.theme;
  }

  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch (error) {
    console.warn('Unable to read system color scheme preference.', error);
    return DEFAULT_PREFERENCES.theme;
  }
}

function resolveFallbackPreferences(): SystemPreferences {
  return mergePreferences({ theme: resolveSystemTheme() });
}

async function readStoredPreferences(): Promise<Partial<SystemPreferences> | null> {
  const store = createKeyValueStore<Partial<SystemPreferences>>(
    LocalStorageKey.SYSTEM_PREFERENCES,
  );
  try {
    const stored = await store.get(SystemPreferencesSchema.partial());
    return stored ?? null;
  } catch (error) {
    const payload = error as StorageErrorPayload;
    if (isParseError(payload)) {
      console.warn('Failed to parse system preferences, falling back to defaults.', {
        error: payload.cause ?? error,
        storedValue: payload.storedValue,
      });
      try {
        await store.remove();
      } catch (removeError) {
        console.warn('Failed to clear invalid system preferences entry.', removeError);
      }
    } else {
      console.warn(
        'Failed to read system preferences from storage, falling back to defaults.',
        error,
      );
    }
    return null;
  }
}

export async function loadSystemPreferences(): Promise<SystemPreferences> {
  const stored = await readStoredPreferences();
  if (!stored) {
    const fallback = resolveFallbackPreferences();
    console.info('No stored system preferences found; using defaults.', { fallback });
    return fallback;
  }

  return mergePreferences(stored);
}

export async function saveSystemPreferences(
  update: Partial<SystemPreferences>,
): Promise<SystemPreferences> {
  const current = await loadSystemPreferences();
  const merged = mergePreferences({
    ...current,
    ...update,
  });
  const store = createKeyValueStore<SystemPreferences>(
    LocalStorageKey.SYSTEM_PREFERENCES,
  );
  try {
    await store.set(merged);
    return merged;
  } catch (error) {
    const payload = error as StorageErrorPayload;
    const cause = isSerializationError(payload) ? (payload.cause ?? error) : error;
    console.error('Failed to persist system preferences.', {
      error: cause,
      payload: merged,
    });
    throw new Error('Failed to persist system preferences.');
  }
}
