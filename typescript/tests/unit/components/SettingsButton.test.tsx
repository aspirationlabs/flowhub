import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SettingsButton } from '../../../app/components/SettingsButton';
import { useConnectors } from '../../../hooks/useConnectors';

jest.mock('../../../hooks/useConnectors');
jest.mock('../../../app/components/connectors/ConnectorsSidebar', () => ({
  ConnectorsSidebar: ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) =>
    isOpen ? (
      <div role="dialog" aria-label="Connectors">
        <button onClick={onClose}>Close</button>
      </div>
    ) : null,
}));

const mockUseConnectors = useConnectors as jest.MockedFunction<typeof useConnectors>;

describe('SettingsButton', () => {
  beforeEach(() => {
    mockUseConnectors.mockReturnValue({
      connectedCount: 0,
      allConnectors: [],
      connectorStates: {},
      connect: jest.fn(),
      disconnect: jest.fn(),
      isConnected: jest.fn(),
      getState: jest.fn(),
    });
  });

  it('should render settings button', () => {
    render(<SettingsButton />);

    const button = screen.getByRole('button', { name: 'Settings' });
    expect(button).toBeInTheDocument();
  });

  it('should show aria-label with connection count when connectors connected', () => {
    mockUseConnectors.mockReturnValue({
      connectedCount: 2,
      allConnectors: [],
      connectorStates: {},
      connect: jest.fn(),
      disconnect: jest.fn(),
      isConnected: jest.fn(),
      getState: jest.fn(),
    });

    render(<SettingsButton />);

    const button = screen.getByRole('button', {
      name: 'Settings - 2 connectors connected',
    });
    expect(button).toBeInTheDocument();
  });

  it('should use singular connector in aria-label when only one connected', () => {
    mockUseConnectors.mockReturnValue({
      connectedCount: 1,
      allConnectors: [],
      connectorStates: {},
      connect: jest.fn(),
      disconnect: jest.fn(),
      isConnected: jest.fn(),
      getState: jest.fn(),
    });

    render(<SettingsButton />);

    const button = screen.getByRole('button', {
      name: 'Settings - 1 connector connected',
    });
    expect(button).toBeInTheDocument();
  });

  it('should open sidebar when clicked', () => {
    render(<SettingsButton />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should not display badge element', () => {
    mockUseConnectors.mockReturnValue({
      connectedCount: 3,
      allConnectors: [],
      connectorStates: {},
      connect: jest.fn(),
      disconnect: jest.fn(),
      isConnected: jest.fn(),
      getState: jest.fn(),
    });

    const { container } = render(<SettingsButton />);

    const badge = container.querySelector('[class*="badge"]');
    expect(badge).not.toBeInTheDocument();
  });
});
