import type { BackgroundPreferences } from '../../../types/background';

function shouldRotate(prefs: BackgroundPreferences): boolean {
  if (!prefs.enabled) return false;

  const now = Date.now();
  const elapsed = now - prefs.lastRotationTime;
  const threshold = prefs.rotationIntervalMinutes * 60 * 1000;

  return elapsed >= threshold;
}

function getNextIndex(currentIndex: number, totalBackgrounds: number): number {
  return (currentIndex + 1) % totalBackgrounds;
}

describe('background rotation logic', () => {
  describe('shouldRotate', () => {
    test('returns false when rotation is disabled', () => {
      const prefs: BackgroundPreferences = {
        currentIndex: 0,
        lastRotationTime: Date.now() - 60 * 60 * 1000,
        rotationIntervalMinutes: 30,
        enabled: false,
      };

      expect(shouldRotate(prefs)).toBe(false);
    });

    test('returns false when not enough time has passed', () => {
      const prefs: BackgroundPreferences = {
        currentIndex: 0,
        lastRotationTime: Date.now() - 10 * 60 * 1000,
        rotationIntervalMinutes: 30,
        enabled: true,
      };

      expect(shouldRotate(prefs)).toBe(false);
    });

    test('returns true when enough time has passed', () => {
      const prefs: BackgroundPreferences = {
        currentIndex: 0,
        lastRotationTime: Date.now() - 35 * 60 * 1000,
        rotationIntervalMinutes: 30,
        enabled: true,
      };

      expect(shouldRotate(prefs)).toBe(true);
    });

    test('returns true when exactly at threshold', () => {
      const prefs: BackgroundPreferences = {
        currentIndex: 0,
        lastRotationTime: Date.now() - 30 * 60 * 1000,
        rotationIntervalMinutes: 30,
        enabled: true,
      };

      expect(shouldRotate(prefs)).toBe(true);
    });
  });

  describe('getNextIndex', () => {
    test('increments index by one', () => {
      expect(getNextIndex(0, 10)).toBe(1);
      expect(getNextIndex(5, 10)).toBe(6);
    });

    test('wraps around from last to first', () => {
      expect(getNextIndex(9, 10)).toBe(0);
      expect(getNextIndex(29, 30)).toBe(0);
    });

    test('handles single background', () => {
      expect(getNextIndex(0, 1)).toBe(0);
    });

    test('handles two backgrounds', () => {
      expect(getNextIndex(0, 2)).toBe(1);
      expect(getNextIndex(1, 2)).toBe(0);
    });
  });
});
