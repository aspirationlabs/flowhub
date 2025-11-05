'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { useCurrentTime } from './hooks/useCurrentTime';

function useShorthandDate(currentTime: Date): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).formatToParts(currentTime);

  const lookup = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? '';
  return `${lookup('weekday')} ${lookup('month')} ${lookup('day')} ${lookup('year')}`
    .replace(/\s+/g, ' ')
    .trim();
}

export function DateWidget() {
  const currentTime = useCurrentTime();
  const formattedDate = useShorthandDate(currentTime);

  return (
    <Card
      variant="glass"
      className="inline-flex items-center justify-center px-6 py-3"
      data-testid="date-widget"
    >
      <span className="text-3xl font-light text-slate-900 drop-shadow sm:text-4xl dark:text-white">
        {formattedDate}
      </span>
    </Card>
  );
}
