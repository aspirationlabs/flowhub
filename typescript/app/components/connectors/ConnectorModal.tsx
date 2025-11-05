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
import { Loader2 } from 'lucide-react';
import { VisuallyHidden } from '../../../components/ui/visually-hidden';

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
        const url = buildInstructionUrl(connector.setupInstructions);
        if (!url) {
          setInstructions('No setup instructions provided.');
          return;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Received ${response.status} from ${url}`);
        }
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

  const isDisconnect = isConnected;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={isDisconnect ? 'sm:max-w-sm p-0' : 'max-h-[85vh] p-0 sm:max-w-2xl'}
      >
        {isDisconnect ? (
          <div className="grid grid-rows-[auto,1fr,auto]">
            <DialogHeader className="px-6 pt-6 pb-4">
              <DialogTitle>Disconnect {connector.displayName}</DialogTitle>
            </DialogHeader>
            <div className="px-6 pb-2" />
            <DialogFooter className="border-t bg-background px-6 py-3">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="default" onClick={handleDisconnect}>
                Disconnect
              </Button>
            </DialogFooter>
          </div>
        ) : (
          <div className="grid h-full max-h-[85vh] grid-rows-[auto,1fr,auto] overflow-hidden">
            <VisuallyHidden>
              <DialogTitle>Configure {connector.displayName}</DialogTitle>
              <DialogDescription>
                Follow the instructions below to set up {connector.displayName}.
              </DialogDescription>
            </VisuallyHidden>

            <div className="min-h-0 overflow-y-auto px-6 pb-6 pt-6">
              <div className="space-y-4">
                <div className="space-y-2 prose prose-sm max-w-none dark:prose-invert">
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
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
            </div>

            <DialogFooter className="border-t bg-background px-6 py-4">
              <Button
                onClick={handleConnect}
                disabled={connector.requiresApiKey && !apiKey}
              >
                Connect
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function buildInstructionUrl(path: string): string | null {
  return path.startsWith('/') ? path : `/${path}`;
}
