import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '../../app/components/widgets/ThemeToggle';

describe('ThemeToggle', () => {
  it('should render theme toggle button', () => {
    const mockToggleTheme = jest.fn();
    render(<ThemeToggle theme="light" onToggle={mockToggleTheme} isReady={true} />);

    expect(
      screen.getByRole('button', { name: /switch to dark mode/i }),
    ).toBeInTheDocument();
  });

  it('should display "Dark" when theme is dark', () => {
    const mockToggleTheme = jest.fn();
    render(<ThemeToggle theme="dark" onToggle={mockToggleTheme} isReady={true} />);

    expect(
      screen.getByRole('button', { name: /switch to light mode/i }),
    ).toBeInTheDocument();
  });

  it('should call onToggle when button is clicked', () => {
    const mockToggleTheme = jest.fn();
    render(<ThemeToggle theme="light" onToggle={mockToggleTheme} isReady={true} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  it('should have backdrop blur styling', () => {
    const mockToggleTheme = jest.fn();
    const { container } = render(
      <ThemeToggle theme="light" onToggle={mockToggleTheme} isReady={true} />,
    );

    const button = container.querySelector('button');
    expect(button).toHaveClass('bg-transparent', 'backdrop-blur');
  });
});
