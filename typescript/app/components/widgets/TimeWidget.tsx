'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { useCurrentTime } from './hooks/useCurrentTime';

export function TimeWidget() {
  const currentTime = useCurrentTime();

  const formatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  const formattedTime = formatter
    .formatToParts(currentTime)
    .filter(
      ({ type, value }) =>
        type !== 'dayPeriod' && (type !== 'literal' || value.trim() !== ''),
    )
    .map(({ value }) => value)
    .join('');

  return (
    <Card
      variant="glass"
      className="inline-flex items-center justify-center px-6 py-4"
      data-testid="time-widget"
    >
      <span className="text-8xl font-semibold tracking-tight drop-shadow-lg sm:text-9xl">
        {formattedTime}
      </span>
    </Card>
  );
}
