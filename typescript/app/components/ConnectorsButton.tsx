'use client';

import React, { useState } from 'react';
import { Settings } from 'lucide-react';
import { OverlayIconButton } from '../../components/ui/overlay-icon-button';
import { ConnectorsSidebar } from './connectors/ConnectorsSidebar';

export function ConnectorsButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <OverlayIconButton
        icon={Settings}
        onClick={() => setIsOpen(true)}
        aria-label="Connector Settings"
      />

      <ConnectorsSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
