'use client';

import React from 'react';
import { ThemeToggle } from '../widgets/ThemeToggle';
import { TimeWidget } from '../widgets/TimeWidget';
import { DateWidget } from '../widgets/DateWidget';
import { useTheme } from '../widgets/hooks/useTheme';

export function Dashboard() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background">
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <div className="flex flex-1 flex-col items-center justify-center px-6 pb-16 pt-24 sm:px-8">
        <div className="flex w-full max-w-2xl flex-col items-stretch gap-3">
          <TimeWidget />
          <DateWidget />
        </div>
      </div>
    </div>
  );
}
