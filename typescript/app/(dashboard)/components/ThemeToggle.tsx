import React from 'react';
import { Theme } from '../../../types/theme.js';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        background: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        fontWeight: 500,
      }}
    >
      {theme === 'light' ? 'Light' : 'Dark'}
    </button>
  );
}
