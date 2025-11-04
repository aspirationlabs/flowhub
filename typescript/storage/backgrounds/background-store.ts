import type { BackgroundPreferences } from '../../types/background';

const STORAGE_KEY = 'flowhub-background-preferences';

const DEFAULT_PREFERENCES: BackgroundPreferences = {
  currentIndex: 0,
  lastRotationTime: Date.now(),
  rotationIntervalMinutes: 30,
  enabled: true,
};

let inMemoryFallback: BackgroundPreferences | null = null;

function isLocalStorageAvailable(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    const test = '__localStorage_test__';
    window.localStorage.setItem(test, test);
    window.localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

export function loadBackgroundPreferences(): BackgroundPreferences {
  if (!isLocalStorageAvailable()) {
    return inMemoryFallback || { ...DEFAULT_PREFERENCES };
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return { ...DEFAULT_PREFERENCES };
    }

    const parsed = JSON.parse(stored) as BackgroundPreferences;

    return {
      currentIndex: parsed.currentIndex ?? DEFAULT_PREFERENCES.currentIndex,
      lastRotationTime: parsed.lastRotationTime ?? DEFAULT_PREFERENCES.lastRotationTime,
      rotationIntervalMinutes:
        parsed.rotationIntervalMinutes ?? DEFAULT_PREFERENCES.rotationIntervalMinutes,
      enabled: parsed.enabled ?? DEFAULT_PREFERENCES.enabled,
    };
  } catch (error) {
    console.warn('Failed to load background preferences:', error);
    return inMemoryFallback || { ...DEFAULT_PREFERENCES };
  }
}

export function saveBackgroundPreferences(preferences: BackgroundPreferences): void {
  inMemoryFallback = { ...preferences };

  if (!isLocalStorageAvailable()) {
    console.warn('localStorage not available, background preferences will not persist');
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.warn('Failed to save background preferences:', error);
  }
}
