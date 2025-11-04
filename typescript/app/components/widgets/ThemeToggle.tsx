'use client';

import React from 'react';
import { Theme } from '@/types/theme';
import { Button } from '@/components/ui/button';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  isReady?: boolean;
}

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      {...props}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      {...props}
    >
      <path d="M21 12.79A9 9 0 0 1 12.21 3 7 7 0 1 0 21 12.79Z" />
    </svg>
  );
}

export function ThemeToggle({ theme, onToggle, isReady = false }: ThemeToggleProps) {
  if (!isReady) {
    return null;
  }

  const isDark = theme === 'dark';
  const Icon = isDark ? MoonIcon : SunIcon;

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggle}
      className="fixed right-6 top-6 bg-card/80 backdrop-blur"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Icon className="h-4 w-4" />
      <span className="sr-only">{isDark ? 'Dark mode' : 'Light mode'}</span>
    </Button>
  );
}
