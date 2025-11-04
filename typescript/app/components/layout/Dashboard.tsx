'use client';

import React from 'react';
import { ThemeToggle } from '../widgets/ThemeToggle';
import { TimeWidget } from '../widgets/TimeWidget';
import { DateWidget } from '../widgets/DateWidget';
import { BackgroundAttribution } from '../widgets/BackgroundAttribution';
import { useTheme } from '../widgets/hooks/useTheme';
import { useBackground } from '../widgets/hooks/useBackground';

export function Dashboard() {
  const { theme, toggleTheme, isReady: isThemeReady } = useTheme();
  const { currentBackground, backgroundUrl } = useBackground();

  const backgroundStyle = backgroundUrl
    ? {
        backgroundImage: `url("${backgroundUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : undefined;

  return (
    <div
      className="relative flex min-h-screen w-full flex-col bg-background"
      style={backgroundStyle}
    >
      <ThemeToggle theme={theme} onToggle={toggleTheme} isReady={isThemeReady} />
      <BackgroundAttribution background={currentBackground} />
      <div className="flex flex-1 flex-col items-center justify-center px-6 pb-16 pt-24 sm:px-8">
        <div className="flex flex-col items-center gap-4">
          <TimeWidget />
          <DateWidget />
        </div>
      </div>
    </div>
  );
}
