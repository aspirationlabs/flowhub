import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Bot } from 'lucide-react';
import type { ConnectorDescriptor } from '@/types/connectors';
import { ConnectorListItem } from '@/app/components/connectors/ConnectorListItem';

function createConnector(
  overrides: Partial<ConnectorDescriptor> = {},
): ConnectorDescriptor {
  return {
    id: 'openai',
    displayName: 'OpenAI',
    description: 'Test connector',
    setupInstructions: 'instructions/test.md',
    requiresApiKey: true,
    icon: Bot,
    metrics: [],
    facets: [],
    ...overrides,
  };
}

describe('ConnectorListItem', () => {
  test('forwards api key collected from modal to onConnect', async () => {
    const onConnect = jest.fn();
    const onDisconnect = jest.fn();

    render(
      <ConnectorListItem
        connector={createConnector()}
        isConnected={false}
        onConnect={onConnect}
        onDisconnect={onDisconnect}
      />,
    );

    const connectButton = screen.getByRole('button', { name: /connect openai/i });
    fireEvent.click(connectButton);

    const apiKeyInput = await screen.findByLabelText(/openai admin api key/i);
    fireEvent.change(apiKeyInput, { target: { value: 'sk-test-123' } });

    const confirmConnect = await screen.findByRole('button', { name: /^connect$/i });
    fireEvent.click(confirmConnect);

    expect(onConnect).toHaveBeenCalledWith('sk-test-123');
    expect(onDisconnect).not.toHaveBeenCalled();
  });

  test('triggers onConnect without api key for keyless connectors', async () => {
    const onConnect = jest.fn();
    const onDisconnect = jest.fn();

    render(
      <ConnectorListItem
        connector={createConnector({ requiresApiKey: false })}
        isConnected={false}
        onConnect={onConnect}
        onDisconnect={onDisconnect}
      />,
    );

    const connectButton = screen.getByRole('button', { name: /connect openai/i });
    fireEvent.click(connectButton);

    const confirmConnect = await screen.findByRole('button', { name: /^connect$/i });
    fireEvent.click(confirmConnect);

    expect(onConnect).toHaveBeenCalledWith(undefined);
    expect(onDisconnect).not.toHaveBeenCalled();
  });

  test('shows plug icon for connected connector', () => {
    const onConnect = jest.fn();
    const onDisconnect = jest.fn();

    render(
      <ConnectorListItem
        connector={createConnector()}
        isConnected={true}
        onConnect={onConnect}
        onDisconnect={onDisconnect}
      />,
    );

    const plugButton = screen.getByRole('button', { name: /disconnect openai/i });
    expect(plugButton).toBeInTheDocument();
  });

  test('confirms before calling onDisconnect for connected connector', () => {
    const onConnect = jest.fn();
    const onDisconnect = jest.fn();

    render(
      <ConnectorListItem
        connector={createConnector()}
        isConnected={true}
        onConnect={onConnect}
        onDisconnect={onDisconnect}
      />,
    );

    const plugButton = screen.getByRole('button', { name: /disconnect openai/i });
    fireEvent.click(plugButton);

    expect(onDisconnect).not.toHaveBeenCalled();
    expect(
      screen.getByRole('heading', { name: /disconnect openai/i }),
    ).toBeInTheDocument();

    const confirmButton = screen.getByRole('button', { name: /^disconnect$/i });
    fireEvent.click(confirmButton);

    expect(onDisconnect).toHaveBeenCalledTimes(1);
  });
});
