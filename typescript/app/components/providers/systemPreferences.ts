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

function readStoredPreferences(): Partial<SystemPreferences> | null {
  const storage = getStorage();
  if (!storage) {
    return null;
  }

  let storedValue: string | null;
  try {
    storedValue = storage.getItem(SYSTEM_PREFERENCES_KEY);
  } catch (error) {
    console.warn('Failed to read system preferences from storage, falling back to defaults.', error);
    return null;
  }

  if (!storedValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(storedValue) as Partial<SystemPreferences>;
    return parsed;
  } catch (error) {
    console.warn('Failed to parse system preferences, falling back to defaults.', error);
    return null;
  }
}

export function loadSystemPreferences(): SystemPreferences {
  const stored = readStoredPreferences();
  if (!stored) {
    return DEFAULT_PREFERENCES;
  }

  return mergePreferences(stored);
}

export function hasStoredSystemPreferences(): boolean {
  return readStoredPreferences() !== null;
}

export function saveSystemPreferences(update: Partial<SystemPreferences>): SystemPreferences {
  const storage = getStorage();
  const current = storage ? loadSystemPreferences() : DEFAULT_PREFERENCES;
  const merged = mergePreferences({
    ...current,
    ...update,
  });

  if (!storage) {
    return merged;
  }

  try {
    storage.setItem(SYSTEM_PREFERENCES_KEY, JSON.stringify(merged));
  } catch (error) {
    console.warn('Failed to persist system preferences.', error);
  }

  return merged;
}
