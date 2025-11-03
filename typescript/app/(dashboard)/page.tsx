import React, { useEffect } from 'react';
import { TimeWidget } from './components/TimeWidget.js';
import { DateWidget } from './components/DateWidget.js';
import { ThemeToggle } from './components/ThemeToggle.js';
import { useTheme } from './hooks/useTheme.js';
import { FONT_FAMILY, THEME_COLORS } from './styles/theme.js';

export function NewTabPage() {
  const { theme, toggleTheme } = useTheme();
  const colors = THEME_COLORS[theme];

  useEffect(() => {
    document.body.style.backgroundColor = colors.background;
    document.body.style.color = colors.text;
    document.body.style.fontFamily = FONT_FAMILY;
  }, [colors.background, colors.text]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <TimeWidget />
      <DateWidget />
    </div>
  );
}
