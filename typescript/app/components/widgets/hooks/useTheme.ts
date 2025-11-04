'use client';

import { useState, useEffect, useCallback } from 'react';
import { Theme } from '@/types/theme';
import {
  hasStoredSystemPreferences,
  loadSystemPreferences,
  saveSystemPreferences,
} from '../../providers/systemPreferences';

function getSystemPreference(): Theme {
  if (typeof window === 'undefined') {
    return 'light';
  }

  try {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  } catch (error) {
    console.warn('Unable to read system color scheme preference.', error);
  }

  return 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (hasStoredSystemPreferences()) {
      return loadSystemPreferences().theme;
    }
    return getSystemPreference();
  });

  useEffect(() => {
    if (hasStoredSystemPreferences()) {
      setTheme(loadSystemPreferences().theme);
      return;
    }

    setTheme(getSystemPreference());
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    saveSystemPreferences({ theme: newTheme });
  }, [theme]);

  return { theme, toggleTheme };
}
