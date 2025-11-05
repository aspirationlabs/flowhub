'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Theme } from '@/types/theme';
import { OverlayIconButton } from '@/components/ui/overlay-icon-button';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  isReady?: boolean;
}

export function ThemeToggle({ theme, onToggle, isReady = false }: ThemeToggleProps) {
  if (!isReady) {
    return null;
  }

  const isDark = theme === 'dark';
  const Icon = isDark ? Moon : Sun;
  const ariaLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return <OverlayIconButton icon={Icon} onClick={onToggle} aria-label={ariaLabel} />;
}
