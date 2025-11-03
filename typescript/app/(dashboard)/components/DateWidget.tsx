import React from 'react';
import { useCurrentTime } from '../hooks/useCurrentTime.js';

function getOrdinalSuffix(day: number): string {
  if (day > 3 && day < 21) return 'th';
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export function DateWidget() {
  const currentTime = useCurrentTime();

  const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(currentTime);
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentTime);
  const day = currentTime.getDate();
  const year = currentTime.getFullYear();
  const ordinalSuffix = getOrdinalSuffix(day);

  return (
    <div
      style={{
        fontSize: '24px',
        fontWeight: 300,
        marginTop: '8px',
      }}
    >
      {dayOfWeek}, {month} {day}{ordinalSuffix} {year}
    </div>
  );
}
