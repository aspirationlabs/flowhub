import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '../../app/(dashboard)/components/ThemeToggle.js';

describe('ThemeToggle', () => {
  it('should render theme toggle button', () => {
    const mockToggleTheme = jest.fn();
    render(<ThemeToggle theme="light" onToggle={mockToggleTheme} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Light')).toBeInTheDocument();
  });

  it('should display "Dark" when theme is dark', () => {
    const mockToggleTheme = jest.fn();
    render(<ThemeToggle theme="dark" onToggle={mockToggleTheme} />);

    expect(screen.getByText('Dark')).toBeInTheDocument();
  });

  it('should call onToggle when button is clicked', () => {
    const mockToggleTheme = jest.fn();
    render(<ThemeToggle theme="light" onToggle={mockToggleTheme} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  it('should be positioned in top-right corner', () => {
    const mockToggleTheme = jest.fn();
    const { container } = render(<ThemeToggle theme="light" onToggle={mockToggleTheme} />);

    const button = container.querySelector('button');
    expect(button).toHaveStyle({ position: 'fixed' });
  });
});
