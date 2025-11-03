import { useState, useEffect } from 'react';
import { Theme } from '../../../types/theme.js';

const STORAGE_KEY = 'theme';

function getSystemPreference(): Theme {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getSystemPreference());

  useEffect(() => {
    try {
      chrome.storage.sync.get([STORAGE_KEY], (result) => {
        if (chrome.runtime.lastError) {
          console.error('Error reading theme from storage:', chrome.runtime.lastError);
          return;
        }

        if (result[STORAGE_KEY]) {
          setTheme(result[STORAGE_KEY] as Theme);
        } else {
          setTheme(getSystemPreference());
        }
      });
    } catch (error) {
      console.error('Error accessing chrome.storage:', error);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    try {
      chrome.storage.sync.set({ [STORAGE_KEY]: newTheme }, () => {
        if (chrome.runtime.lastError) {
          console.error('Error saving theme to storage:', chrome.runtime.lastError);
        }
      });
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  };

  return { theme, toggleTheme };
}
