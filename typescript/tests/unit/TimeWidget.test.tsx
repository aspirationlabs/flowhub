import React from 'react';
import { render, screen } from '@testing-library/react';
import { TimeWidget } from '../../app/(dashboard)/components/TimeWidget.js';

jest.mock('../../app/(dashboard)/hooks/useCurrentTime.js', () => ({
  useCurrentTime: jest.fn(),
}));

import { useCurrentTime } from '../../app/(dashboard)/hooks/useCurrentTime.js';

describe('TimeWidget', () => {
  it('should render time in correct format', () => {
    const mockDate = new Date('2024-10-04T14:30:45');
    (useCurrentTime as jest.Mock).mockReturnValue(mockDate);

    render(<TimeWidget />);

    expect(screen.getByText(/2:30/)).toBeInTheDocument();
  });

  it('should use system timezone', () => {
    const mockDate = new Date('2024-10-04T09:15:30');
    (useCurrentTime as jest.Mock).mockReturnValue(mockDate);

    render(<TimeWidget />);

    const formatter = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    const expectedTime = formatter.format(mockDate);
    expect(screen.getByText(expectedTime)).toBeInTheDocument();
  });

  it('should display time with PM correctly', () => {
    const mockDate = new Date('2024-10-04T16:45:00');
    (useCurrentTime as jest.Mock).mockReturnValue(mockDate);

    render(<TimeWidget />);

    expect(screen.getByText(/4:45/)).toBeInTheDocument();
    expect(screen.getByText(/PM/)).toBeInTheDocument();
  });

  it('should display time with AM correctly', () => {
    const mockDate = new Date('2024-10-04T09:30:00');
    (useCurrentTime as jest.Mock).mockReturnValue(mockDate);

    render(<TimeWidget />);

    expect(screen.getByText(/9:30/)).toBeInTheDocument();
    expect(screen.getByText(/AM/)).toBeInTheDocument();
  });
});
