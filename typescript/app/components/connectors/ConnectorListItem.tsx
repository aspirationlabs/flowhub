'use client';

import React, { useState } from 'react';
import type { ConnectorDescriptor } from '../../../types/connectors';
import { Badge } from '../../../components/ui/badge';
import { Plug, PlugZap } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { ConnectorModal } from './ConnectorModal';

interface ConnectorListItemProps {
  connector: ConnectorDescriptor;
  isConnected: boolean;
  onConnect: (apiKey?: string) => void;
  onDisconnect: () => void;
}

export function ConnectorListItem({
  connector,
  isConnected,
  onConnect,
  onDisconnect,
}: ConnectorListItemProps) {
  const [showModal, setShowModal] = useState(false);

  const handleConnectClick = () => {
    setShowModal(true);
  };

  const handleDisconnectClick = () => {
    setShowModal(true);
  };

  const handleConnect = (apiKey?: string) => {
    onConnect(apiKey);
    setShowModal(false);
  };

  const handleDisconnect = () => {
    onDisconnect();
    setShowModal(false);
  };

  const ConnectorIcon = connector.icon;

  return (
    <>
      <div className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
        <div className="flex items-center gap-3 flex-1">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
            <ConnectorIcon className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-sm">{connector.displayName}</h3>
              {isConnected && (
                <Badge
                  variant="secondary"
                  className="text-xs bg-green-900/30 text-green-700 dark:text-green-400 border-green-900/50"
                >
                  Connected
                </Badge>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              {connector.description}
            </p>
          </div>
        </div>

        {isConnected ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDisconnectClick}
            className="h-10 w-10 p-0"
            aria-label={`Disconnect ${connector.displayName}`}
            aria-haspopup="dialog"
          >
            <PlugZap className="h-5 w-5" />
            <span className="sr-only">Disconnect</span>
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleConnectClick}
            className="h-10 w-10 p-0"
            aria-label={`Connect ${connector.displayName}`}
            aria-haspopup="dialog"
          >
            <Plug className="h-5 w-5" />
            <span className="sr-only">Connect</span>
          </Button>
        )}
      </div>

      <ConnectorModal
        connector={connector}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConnect={handleConnect}
        onDisconnect={handleDisconnect}
        isConnected={isConnected}
      />
    </>
  );
}
