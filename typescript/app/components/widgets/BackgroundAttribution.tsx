'use client';

import React from 'react';
import { Image } from 'lucide-react';
import { OverlayIconButton } from '@/components/ui/overlay-icon-button';
import type { BackgroundImage } from '@/types/background';

interface BackgroundAttributionProps {
  background: BackgroundImage | null;
}

export function BackgroundAttribution({ background }: BackgroundAttributionProps) {
  if (!background || !background.sourceUrl) {
    return null;
  }

  const handleClick = () => {
    const attributionUrl = `${background.sourceUrl}?utm_source=flowhub&utm_medium=referral`;
    window.open(attributionUrl, '_blank', 'noopener,noreferrer');
  };

  const ariaLabel = `View source: ${background.description || 'background image'}`;

  return (
    <div className="fixed left-6 bottom-6">
      <OverlayIconButton icon={Image} onClick={handleClick} aria-label={ariaLabel} />
    </div>
  );
}
