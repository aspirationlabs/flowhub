'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useCurrentTime } from './hooks/useCurrentTime';

function useShorthandDate(currentTime: Date): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).formatToParts(currentTime);

  const lookup = (type: Intl.DateTimeFormatPartTypes) => parts.find((part) => part.type === type)?.value ?? '';
  return `${lookup('weekday')} ${lookup('month')} ${lookup('day')} ${lookup('year')}`.replace(/\s+/g, ' ').trim();
}

export function DateWidget() {
  const currentTime = useCurrentTime();
  const formattedDate = useShorthandDate(currentTime);

  return (
    <Card className="w-full bg-background/70" data-testid="date-widget">
      <CardContent className="flex items-center justify-center py-6">
        <span className="text-3xl font-light text-foreground sm:text-4xl">{formattedDate}</span>
      </CardContent>
    </Card>
  );
}
