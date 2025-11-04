import React from 'react';
import { render, screen } from '@testing-library/react';
import { TimeWidget } from '../../app/components/widgets/TimeWidget';

jest.mock('../../app/components/widgets/hooks/useCurrentTime', () => ({
  useCurrentTime: jest.fn(),
}));

import { useCurrentTime } from '../../app/components/widgets/hooks/useCurrentTime';

const formatWithoutMeridiem = (date: Date) =>
  new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
    .formatToParts(date)
    .filter(
      ({ type, value }) =>
        type !== 'dayPeriod' && (type !== 'literal' || value.trim() !== ''),
    )
    .map(({ value }) => value)
    .join('');

describe('TimeWidget', () => {
  it('should render time in correct format', () => {
    const mockDate = new Date('2024-10-04T14:30:45');
    (useCurrentTime as jest.Mock).mockReturnValue(mockDate);

    render(<TimeWidget />);

    expect(screen.getByText(formatWithoutMeridiem(mockDate))).toBeInTheDocument();
  });

  it('should use system timezone', () => {
    const mockDate = new Date('2024-10-04T09:15:30');
    (useCurrentTime as jest.Mock).mockReturnValue(mockDate);

    render(<TimeWidget />);

    expect(screen.getByText(formatWithoutMeridiem(mockDate))).toBeInTheDocument();
  });

  it('should display time with PM correctly', () => {
    const mockDate = new Date('2024-10-04T16:45:00');
    (useCurrentTime as jest.Mock).mockReturnValue(mockDate);

    render(<TimeWidget />);

    expect(screen.getByText(formatWithoutMeridiem(mockDate))).toBeInTheDocument();
    expect(screen.queryByText(/PM/i)).not.toBeInTheDocument();
  });

  it('should display time with AM correctly', () => {
    const mockDate = new Date('2024-10-04T09:30:00');
    (useCurrentTime as jest.Mock).mockReturnValue(mockDate);

    render(<TimeWidget />);

    expect(screen.getByText(formatWithoutMeridiem(mockDate))).toBeInTheDocument();
    expect(screen.queryByText(/AM/i)).not.toBeInTheDocument();
  });
});
