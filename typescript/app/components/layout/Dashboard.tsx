'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ThemeToggle } from '../widgets/ThemeToggle';
import { TimeWidget } from '../widgets/TimeWidget';
import { DateWidget } from '../widgets/DateWidget';
import { BackgroundAttribution } from '../widgets/BackgroundAttribution';
import { useTheme } from '../widgets/hooks/useTheme';
import { useBackground } from '../widgets/hooks/useBackground';
import { ConnectorsButton } from '../ConnectorsButton';
import { ConnectorsProvider } from '../providers/ConnectorsProvider';
import { useConnectors } from '../../../hooks/useConnectors';
import { DetailedAnalytics } from '../widgets/DetailedAnalytics';
import { Button } from '../../../components/ui/button';
import { ChevronDown } from 'lucide-react';

function DashboardContent() {
  const { theme, toggleTheme, isReady: isThemeReady } = useTheme();
  const { currentBackground, backgroundUrl } = useBackground();
  const connectorState = useConnectors();
  const detailsRef = useRef<HTMLDivElement>(null);
  const [showDetails, setShowDetails] = useState(false);

  const connectedCount = Object.values(connectorState.getConnectorStates()).filter(
    (state) => state.status === 'connected',
  ).length;

  useEffect(() => {
    setShowDetails(connectedCount > 0);
  }, [connectedCount]);

  const backgroundStyle = backgroundUrl
    ? {
        backgroundImage: `url("${backgroundUrl}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }
    : undefined;

  const scrollToDetails = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    detailsRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <div
        className="relative flex min-h-screen w-full flex-col bg-background overflow-hidden"
        style={backgroundStyle}
      >
        <div className="fixed top-4 right-4 flex items-center gap-2 z-10">
          <ConnectorsButton />
          <ThemeToggle theme={theme} onToggle={toggleTheme} isReady={isThemeReady} />
        </div>
        <BackgroundAttribution background={currentBackground} />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="flex flex-col items-center gap-4">
            <TimeWidget />
            <DateWidget />
          </div>
        </div>

        {showDetails && (
          <div className="absolute bottom-16 left-0 right-0 flex justify-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToDetails}
              className="hover:text-foreground"
            >
              Details
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {showDetails && (
        <div
          ref={detailsRef}
          className="relative flex min-h-screen w-full flex-col items-center bg-background pt-24 pb-16"
          style={backgroundStyle}
        >
          <DetailedAnalytics />
        </div>
      )}
    </>
  );
}

export function Dashboard() {
  return (
    <ConnectorsProvider>
      <DashboardContent />
    </ConnectorsProvider>
  );
}
