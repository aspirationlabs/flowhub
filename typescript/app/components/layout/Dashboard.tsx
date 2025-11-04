'use client';

import React from 'react';
import { ThemeToggle } from '../widgets/ThemeToggle';
import { TimeWidget } from '../widgets/TimeWidget';
import { DateWidget } from '../widgets/DateWidget';
import { useTheme } from '../widgets/hooks/useTheme';
import { Shell, ShellContent } from '../ui/shell';

export function Dashboard() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Shell>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <ShellContent className="flex items-center justify-center">
        <div className="flex w-full max-w-2xl flex-col items-stretch gap-3">
          <TimeWidget />
          <DateWidget />
        </div>
      </ShellContent>
    </Shell>
  );
}
