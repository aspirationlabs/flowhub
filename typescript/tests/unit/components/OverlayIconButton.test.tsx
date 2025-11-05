import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { OverlayIconButton } from '../../../components/ui/overlay-icon-button';
import { Settings } from 'lucide-react';

describe('OverlayIconButton', () => {
  it('should render with icon', () => {
    render(<OverlayIconButton icon={Settings} aria-label="Settings" />);

    const button = screen.getByRole('button', { name: 'Settings' });
    expect(button).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const mockOnClick = jest.fn();
    render(
      <OverlayIconButton icon={Settings} aria-label="Settings" onClick={mockOnClick} />,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should apply aria-label', () => {
    render(<OverlayIconButton icon={Settings} aria-label="Open settings panel" />);

    const button = screen.getByRole('button', { name: 'Open settings panel' });
    expect(button).toBeInTheDocument();
  });

  it('should render badge when provided', () => {
    const badge = <span data-testid="badge">3</span>;
    render(<OverlayIconButton icon={Settings} aria-label="Settings" badge={badge} />);

    expect(screen.getByTestId('badge')).toBeInTheDocument();
    expect(screen.getByTestId('badge')).toHaveTextContent('3');
  });

  it('should not render badge when not provided', () => {
    render(<OverlayIconButton icon={Settings} aria-label="Settings" />);

    expect(screen.queryByTestId('badge')).not.toBeInTheDocument();
  });

  it('should be disabled when disabled prop is true', () => {
    render(<OverlayIconButton icon={Settings} aria-label="Settings" disabled />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should not call onClick when disabled', () => {
    const mockOnClick = jest.fn();
    render(
      <OverlayIconButton
        icon={Settings}
        aria-label="Settings"
        onClick={mockOnClick}
        disabled
      />,
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it('should apply custom className', () => {
    const { container } = render(
      <OverlayIconButton
        icon={Settings}
        aria-label="Settings"
        className="custom-class"
      />,
    );

    const button = container.querySelector('button');
    expect(button).toHaveClass('custom-class');
  });

  it('should have transparent background and backdrop-blur classes', () => {
    const { container } = render(
      <OverlayIconButton icon={Settings} aria-label="Settings" />,
    );

    const button = container.querySelector('button');
    expect(button).toHaveClass('bg-transparent', 'backdrop-blur');
  });

  it('should have focus-visible ring classes for accessibility', () => {
    const { container } = render(
      <OverlayIconButton icon={Settings} aria-label="Settings" />,
    );

    const button = container.querySelector('button');
    expect(button).toHaveClass('focus-visible:ring-2');
  });
});
