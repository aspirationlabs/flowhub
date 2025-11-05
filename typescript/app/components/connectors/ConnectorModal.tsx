'use client';

import React, { useState } from 'react';
import type { ConnectorDescriptor } from '../../../types/connectors';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../../../components/ui/dialog';
import { Button } from '../../../components/ui/button';

interface ConnectorModalProps {
  connector: ConnectorDescriptor;
  isOpen: boolean;
  onClose: () => void;
  onConnect: (apiKey?: string) => void;
}

export function ConnectorModal({
  connector,
  isOpen,
  onClose,
  onConnect,
}: ConnectorModalProps) {
  const [apiKey, setApiKey] = useState('');

  const handleConnect = () => {
    if (connector.requiresApiKey && !apiKey) {
      return;
    }
    onConnect(apiKey || undefined);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Configure {connector.displayName}</DialogTitle>
          <DialogDescription>
            Follow the instructions below to set up {connector.displayName}.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Instructions:</h4>
            <ol className="list-decimal list-inside space-y-1">
              {connector.setupInstructions.map((instruction, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          {connector.requiresApiKey && (
            <div className="space-y-2">
              <label
                htmlFor="api-key"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {connector.displayName} Admin API Key
              </label>
              <input
                id="api-key"
                type="password"
                placeholder="sk-ant-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          )}
        </div>

        <DialogFooter>
          <Button onClick={handleConnect} disabled={connector.requiresApiKey && !apiKey}>
            Connect
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
