'use client';

import { useState, useEffect, useCallback } from 'react';
import { Theme } from 'types/theme';
import {
  loadSystemPreferences,
  saveSystemPreferences,
} from '../../providers/systemPreferences';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    void (async () => {
      const preferences = await loadSystemPreferences();
      setTheme(preferences.theme);
      setIsReady(true);
    })();
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = useCallback(async () => {
    const previousTheme = theme;
    const newTheme: Theme = previousTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    try {
      await saveSystemPreferences({ theme: newTheme });
    } catch (error) {
      console.error('Failed to save theme preference.', { error });
      setTheme(previousTheme);
      throw error;
    }
  }, [theme]);

  return { theme, toggleTheme, isReady };
}
