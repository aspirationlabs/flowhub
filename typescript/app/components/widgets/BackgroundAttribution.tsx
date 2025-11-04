'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import type { BackgroundImage } from '@/types/background';

interface BackgroundAttributionProps {
  background: BackgroundImage | null;
}

function ImageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

export function BackgroundAttribution({ background }: BackgroundAttributionProps) {
  if (!background || !background.sourceUrl) {
    return null;
  }

  const handleClick = () => {
    const attributionUrl = `${background.sourceUrl}?utm_source=flowhub&utm_medium=referral`;
    window.open(attributionUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleClick}
      className="fixed left-6 bottom-6 bg-card/80 backdrop-blur"
      aria-label={`View source: ${background.description || 'background image'}`}
      title={background.description || 'View background source on Unsplash'}
    >
      <ImageIcon className="h-4 w-4" />
      <span className="sr-only">View background source: {background.description}</span>
    </Button>
  );
}
