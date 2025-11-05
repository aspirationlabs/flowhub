'use client';

import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';
import { OverlayIconButton } from '../../components/ui/overlay-icon-button';
import { ConnectorsSidebar } from './connectors/ConnectorsSidebar';
import { useConnectors } from '../../hooks/useConnectors';

export function SettingsButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { connectedCount } = useConnectors();
  const [ariaLabel, setAriaLabel] = useState('Settings');

  useEffect(() => {
    setAriaLabel(
      connectedCount > 0
        ? `Settings - ${connectedCount} connector${connectedCount === 1 ? '' : 's'} connected`
        : 'Settings',
    );
  }, [connectedCount]);

  return (
    <>
      <OverlayIconButton
        icon={Settings}
        onClick={() => setIsOpen(true)}
        aria-label={ariaLabel}
      />

      <ConnectorsSidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
