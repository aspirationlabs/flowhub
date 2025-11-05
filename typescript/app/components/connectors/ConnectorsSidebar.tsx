'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '../../../components/ui/sheet';
import { ScrollArea } from '../../../components/ui/scroll-area';
import { Separator } from '../../../components/ui/separator';
import { useConnectors } from '../../../hooks/useConnectors';
import { ConnectorListItem } from './ConnectorListItem';

interface ConnectorsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConnectorsSidebar({ isOpen, onClose }: ConnectorsSidebarProps) {
  const { allConnectors, isConnected, connect, disconnect } = useConnectors();

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-[90vw] sm:w-[540px] md:w-[600px] sm:max-w-[40vw]"
      >
        <SheetHeader>
          <SheetTitle>Connectors</SheetTitle>
        </SheetHeader>

        <Separator className="my-4" />

        <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
          <div className="space-y-2">
            {allConnectors.map((connector) => (
              <ConnectorListItem
                key={connector.id}
                connector={connector}
                isConnected={isConnected(connector.id)}
                onConnect={(apiKey) => connect(connector.id, apiKey)}
                onDisconnect={() => disconnect(connector.id)}
              />
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
