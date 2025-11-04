'use client';

import { useState, useEffect, useCallback } from 'react';
import { Theme } from '@/types/theme';
import {
  loadSystemPreferences,
  saveSystemPreferences,
} from '../../providers/systemPreferences';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => loadSystemPreferences().theme);

  useEffect(() => {
    setTheme(loadSystemPreferences().theme);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const previousTheme = theme;
    const newTheme: Theme = previousTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    try {
      saveSystemPreferences({ theme: newTheme });
    } catch (error) {
      console.error('Failed to save theme preference.', { error });
      setTheme(previousTheme);
      throw error;
    }
  }, [theme]);

  return { theme, toggleTheme };
}
