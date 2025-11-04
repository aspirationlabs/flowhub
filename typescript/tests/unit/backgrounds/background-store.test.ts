import {
  loadBackgroundPreferences,
  saveBackgroundPreferences,
} from '../../../storage/backgrounds/background-store';
import type { BackgroundPreferences } from '../../../types/background';

describe('background-store', () => {
  const STORAGE_KEY = 'flowhub-background-preferences';

  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  describe('loadBackgroundPreferences', () => {
    test('returns default preferences when localStorage is empty', () => {
      const prefs = loadBackgroundPreferences();

      expect(prefs).toEqual({
        currentIndex: 0,
        lastRotationTime: expect.any(Number),
        rotationIntervalMinutes: 30,
        enabled: true,
      });
    });

    test('loads preferences from localStorage', () => {
      const mockPrefs: BackgroundPreferences = {
        currentIndex: 5,
        lastRotationTime: 1234567890,
        rotationIntervalMinutes: 30,
        enabled: true,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(mockPrefs));

      const prefs = loadBackgroundPreferences();
      expect(prefs).toEqual(mockPrefs);
    });

    test('handles corrupted localStorage data', () => {
      localStorage.setItem(STORAGE_KEY, 'invalid json');

      const prefs = loadBackgroundPreferences();

      expect(prefs).toEqual({
        currentIndex: 0,
        lastRotationTime: expect.any(Number),
        rotationIntervalMinutes: 30,
        enabled: true,
      });
    });

    test('handles partial preferences data', () => {
      const partialPrefs = {
        currentIndex: 3,
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(partialPrefs));

      const prefs = loadBackgroundPreferences();

      expect(prefs.currentIndex).toBe(3);
      expect(prefs.rotationIntervalMinutes).toBe(30);
      expect(prefs.enabled).toBe(true);
    });
  });

  describe('saveBackgroundPreferences', () => {
    test('saves preferences to localStorage', () => {
      const mockPrefs: BackgroundPreferences = {
        currentIndex: 10,
        lastRotationTime: 9876543210,
        rotationIntervalMinutes: 30,
        enabled: false,
      };

      saveBackgroundPreferences(mockPrefs);

      const stored = localStorage.getItem(STORAGE_KEY);
      expect(stored).not.toBeNull();
      expect(JSON.parse(stored!)).toEqual(mockPrefs);
    });

    test('overwrites existing preferences', () => {
      const firstPrefs: BackgroundPreferences = {
        currentIndex: 1,
        lastRotationTime: 1111111111,
        rotationIntervalMinutes: 30,
        enabled: true,
      };

      const secondPrefs: BackgroundPreferences = {
        currentIndex: 2,
        lastRotationTime: 2222222222,
        rotationIntervalMinutes: 30,
        enabled: false,
      };

      saveBackgroundPreferences(firstPrefs);
      saveBackgroundPreferences(secondPrefs);

      const stored = localStorage.getItem(STORAGE_KEY);
      expect(JSON.parse(stored!)).toEqual(secondPrefs);
    });
  });
});
