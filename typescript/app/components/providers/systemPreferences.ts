'use client';

import { Theme } from '@/types/theme';

export type SystemPreferences = {
  theme: Theme;
};

export const SYSTEM_PREFERENCES_KEY = 'flowhub-system-preferences';

const DEFAULT_PREFERENCES: SystemPreferences = {
  theme: 'light',
};

function getStorage(): Storage | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return window.localStorage;
  } catch (error) {
    console.warn('Local storage unavailable; using defaults.', error);
    return null;
  }
}

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

function readStoredPreferences(): Partial<SystemPreferences> | null {
  const storage = getStorage();
  if (!storage) {
    return null;
  }

  let storedValue: string | null;
  try {
    storedValue = storage.getItem(SYSTEM_PREFERENCES_KEY);
  } catch (error) {
    console.warn(
      'Failed to read system preferences from storage, falling back to defaults.',
      error,
    );
    return null;
  }

  if (!storedValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(storedValue) as Partial<SystemPreferences>;
    return parsed;
  } catch (error) {
    console.warn('Failed to parse system preferences, falling back to defaults.', {
      error,
      storedValue,
    });
    return null;
  }
}

export function loadSystemPreferences(): SystemPreferences {
  const stored = readStoredPreferences();
  if (!stored) {
    const fallback = resolveFallbackPreferences();
    console.info('No stored system preferences found; using defaults.', { fallback });
    return fallback;
  }

  return mergePreferences(stored);
}

export function saveSystemPreferences(
  update: Partial<SystemPreferences>,
): SystemPreferences {
  const storage = getStorage();
  const current = storage ? loadSystemPreferences() : resolveFallbackPreferences();
  const merged = mergePreferences({
    ...current,
    ...update,
  });

  if (!storage) {
    return merged;
  }

  try {
    const payload = JSON.stringify(merged);
    storage.setItem(SYSTEM_PREFERENCES_KEY, payload);
  } catch (error) {
    console.error('Failed to persist system preferences.', {
      error,
      payload: merged,
    });
    throw new Error('Failed to persist system preferences.', {
      cause: error instanceof Error ? error : undefined,
    });
  }

  return merged;
}
