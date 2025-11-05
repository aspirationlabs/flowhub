'use client';

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
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
  onDisconnect?: () => void;
  isConnected?: boolean;
}

export function ConnectorModal({
  connector,
  isOpen,
  onClose,
  onConnect,
  onDisconnect,
  isConnected = false,
}: ConnectorModalProps) {
  const [apiKey, setApiKey] = useState('');
  const [instructions, setInstructions] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadInstructions() {
      try {
        setLoading(true);
        const response = await fetch(`/${connector.setupInstructions}`);
        const text = await response.text();
        setInstructions(text);
      } catch (error) {
        console.error('Failed to load instructions:', error);
        setInstructions('Failed to load setup instructions.');
      } finally {
        setLoading(false);
      }
    }

    if (isOpen && !isConnected) {
      loadInstructions();
    } else {
      setApiKey('');
      setInstructions('');
    }
  }, [connector.setupInstructions, isOpen, isConnected]);

  const handleConnect = () => {
    if (connector.requiresApiKey && !apiKey) {
      return;
    }
    onConnect(apiKey || undefined);
  };

  const handleDisconnect = () => {
    onDisconnect?.();
  };

  if (isConnected) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Disconnect {connector.displayName}</DialogTitle>
            <DialogDescription>You can reconnect anytime.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="default" onClick={handleDisconnect}>
              Disconnect
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

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
          <div className="space-y-2 prose prose-sm dark:prose-invert max-w-none">
            {loading ? (
              <p className="text-sm text-muted-foreground">Loading instructions...</p>
            ) : (
              <ReactMarkdown>{instructions}</ReactMarkdown>
            )}
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
