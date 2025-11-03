import React from 'react';
import { useCurrentTime } from '../hooks/useCurrentTime.js';

export function TimeWidget() {
  const currentTime = useCurrentTime();

  const formatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  const formattedTime = formatter.format(currentTime);

  return (
    <div
      style={{
        fontSize: '120px',
        fontWeight: 400,
        letterSpacing: '-2px',
      }}
    >
      {formattedTime}
    </div>
  );
}
