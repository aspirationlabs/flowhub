import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ConnectorsButton } from '../../../app/components/ConnectorsButton';

jest.mock('../../../app/components/connectors/ConnectorsSidebar', () => ({
  ConnectorsSidebar: ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) =>
    isOpen ? (
      <div role="dialog" aria-label="Connectors">
        <button onClick={onClose}>Close</button>
      </div>
    ) : null,
}));

describe('ConnectorsButton', () => {
  it('should render connectors button with correct aria-label', () => {
    render(<ConnectorsButton />);

    const button = screen.getByRole('button', { name: 'Connector Settings' });
    expect(button).toBeInTheDocument();
  });

  it('should open sidebar when clicked', () => {
    render(<ConnectorsButton />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should not display badge element', () => {
    const { container } = render(<ConnectorsButton />);

    const badge = container.querySelector('[class*="badge"]');
    expect(badge).not.toBeInTheDocument();
  });
});
