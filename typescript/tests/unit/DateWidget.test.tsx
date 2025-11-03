import React from 'react';
import { render, screen } from '@testing-library/react';
import { DateWidget } from '../../app/(dashboard)/components/DateWidget.js';

jest.mock('../../app/(dashboard)/hooks/useCurrentTime.js', () => ({
  useCurrentTime: jest.fn(),
}));

import { useCurrentTime } from '../../app/(dashboard)/hooks/useCurrentTime.js';

describe('DateWidget', () => {
  it('should render day of week and date', () => {
    const mockDate = new Date('2024-10-04T14:30:00');
    (useCurrentTime as jest.Mock).mockReturnValue(mockDate);

    render(<DateWidget />);

    expect(screen.getByText(/Friday/)).toBeInTheDocument();
    expect(screen.getByText(/October/)).toBeInTheDocument();
    expect(screen.getByText(/4/)).toBeInTheDocument();
    expect(screen.getByText(/2024/)).toBeInTheDocument();
  });

  it('should format date with ordinal suffix', () => {
    const mockDate = new Date('2024-11-03T14:11:00');
    (useCurrentTime as jest.Mock).mockReturnValue(mockDate);

    render(<DateWidget />);

    expect(screen.getByText(/November/)).toBeInTheDocument();
    expect(screen.getByText(/3rd/)).toBeInTheDocument();
    expect(screen.getByText(/2024/)).toBeInTheDocument();
  });

  it('should display Monday correctly', () => {
    const mockDate = new Date('2024-11-04T10:00:00');
    (useCurrentTime as jest.Mock).mockReturnValue(mockDate);

    render(<DateWidget />);

    expect(screen.getByText(/Monday/)).toBeInTheDocument();
  });
});
