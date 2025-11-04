import { useState, useEffect, useCallback } from 'react';
import type {
  BackgroundImage,
  BackgroundPreferences,
} from '../../../../types/background';
import {
  loadBackgroundPreferences,
  saveBackgroundPreferences,
} from '../../../../storage/backgrounds/background-store';

interface UseBackgroundReturn {
  currentBackground: BackgroundImage | null;
  isLoading: boolean;
  error: string | null;
  backgroundUrl: string | null;
  rotateNow: () => void;
}

const BREAKPOINTS = [1080, 1440, 1920, 2560];

function selectBreakpoint(width: number, height: number): number {
  const maxDimension = Math.max(width, height);
  return (
    BREAKPOINTS.find((bp) => bp >= maxDimension) || BREAKPOINTS[BREAKPOINTS.length - 1]
  );
}

function buildBackgroundUrl(hotlink: string, width: number, height: number): string {
  const breakpoint = selectBreakpoint(width, height);
  return `${hotlink}?auto=format&fit=crop&w=${breakpoint}&h=${breakpoint}&q=85`;
}

export function useBackground(): UseBackgroundReturn {
  const [backgrounds, setBackgrounds] = useState<BackgroundImage[]>([]);
  const [preferences, setPreferences] = useState<BackgroundPreferences | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [viewport, setViewport] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    async function loadBackgrounds() {
      try {
        const response = await fetch('/backgrounds.json');
        if (!response.ok) {
          throw new Error(`Failed to load backgrounds: ${response.statusText}`);
        }
        const data = (await response.json()) as BackgroundImage[];

        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('No backgrounds available');
        }

        setBackgrounds(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Failed to load backgrounds';
        console.error('Error loading backgrounds:', message);
        setError(message);
      } finally {
        setIsLoading(false);
      }
    }

    loadBackgrounds();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefs = loadBackgroundPreferences();
    setPreferences(prefs);
  }, []);

  const shouldRotate = useCallback((prefs: BackgroundPreferences): boolean => {
    if (!prefs.enabled) return false;

    const now = Date.now();
    const elapsed = now - prefs.lastRotationTime;
    const threshold = prefs.rotationIntervalMinutes * 60 * 1000;

    return elapsed >= threshold;
  }, []);

  const rotate = useCallback(() => {
    if (!preferences || backgrounds.length === 0) return;

    const nextIndex = (preferences.currentIndex + 1) % backgrounds.length;
    const updatedPrefs: BackgroundPreferences = {
      ...preferences,
      currentIndex: nextIndex,
      lastRotationTime: Date.now(),
    };

    setPreferences(updatedPrefs);
    saveBackgroundPreferences(updatedPrefs);

    const nextBackground = backgrounds[(nextIndex + 1) % backgrounds.length];
    if (nextBackground) {
      const preloadUrl = buildBackgroundUrl(
        nextBackground.hotlink,
        viewport.width,
        viewport.height,
      );
      const img = new Image();
      img.src = preloadUrl;
    }
  }, [preferences, backgrounds, viewport]);

  useEffect(() => {
    if (!preferences || backgrounds.length === 0) return;

    if (shouldRotate(preferences)) {
      rotate();
    }

    const checkInterval = setInterval(() => {
      const currentPrefs = loadBackgroundPreferences();
      if (shouldRotate(currentPrefs)) {
        rotate();
      }
    }, 60 * 1000);

    return () => clearInterval(checkInterval);
  }, [preferences, backgrounds, shouldRotate, rotate]);

  useEffect(() => {
    if (backgrounds.length === 0 || !preferences) return;

    const currentBg = backgrounds[preferences.currentIndex];
    if (!currentBg) return;

    const nextIndex = (preferences.currentIndex + 1) % backgrounds.length;
    const nextBg = backgrounds[nextIndex];

    if (nextBg) {
      const preloadUrl = buildBackgroundUrl(
        nextBg.hotlink,
        viewport.width,
        viewport.height,
      );
      const img = new Image();
      img.src = preloadUrl;
    }
  }, [backgrounds, preferences, viewport]);

  const currentBackground =
    backgrounds.length > 0 && preferences
      ? backgrounds[preferences.currentIndex] || null
      : null;

  const backgroundUrl =
    currentBackground && !isLoading
      ? buildBackgroundUrl(currentBackground.hotlink, viewport.width, viewport.height)
      : null;

  return {
    currentBackground,
    isLoading,
    error,
    backgroundUrl,
    rotateNow: rotate,
  };
}
