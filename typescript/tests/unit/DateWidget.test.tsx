import React from 'react';
import { render, screen } from '@testing-library/react';
import { DateWidget } from '../../app/components/widgets/DateWidget';

describe('DateWidget', () => {
  it('renders a formatted date string', () => {
    render(<DateWidget />);

    const dateText = screen.getByText(/^[A-Za-z]{3} [A-Za-z]{3} \d{1,2} \d{4}$/);
    expect(dateText).toBeInTheDocument();
  });
});
