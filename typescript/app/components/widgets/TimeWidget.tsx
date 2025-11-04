'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
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
    <Card className="w-full bg-background/70" data-testid="time-widget">
      <CardContent className="flex items-center justify-center py-12">
        <span className="text-8xl font-semibold tracking-tight sm:text-9xl">
          {formattedTime}
        </span>
      </CardContent>
    </Card>
  );
}
