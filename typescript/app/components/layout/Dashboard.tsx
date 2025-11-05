'use client';

import React, { useRef } from 'react';
import { ThemeToggle } from '../widgets/ThemeToggle';
import { TimeWidget } from '../widgets/TimeWidget';
import { DateWidget } from '../widgets/DateWidget';
import { BackgroundAttribution } from '../widgets/BackgroundAttribution';
import { useTheme } from '../widgets/hooks/useTheme';
import { useBackground } from '../widgets/hooks/useBackground';
import { SettingsButton } from '../SettingsButton';
import { ConnectorsProvider } from '../providers/ConnectorsProvider';
import { useConnectors } from '../../../hooks/useConnectors';
import { DetailedAnalytics } from '../widgets/DetailedAnalytics';
import { Button } from '../../../components/ui/button';
import { ChevronDown } from 'lucide-react';

function DashboardContent() {
  const { theme, toggleTheme, isReady: isThemeReady } = useTheme();
  const { currentBackground, backgroundUrl } = useBackground();
  const { connectedCount } = useConnectors();
  const detailsRef = useRef<HTMLDivElement>(null);

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
        className="relative flex min-h-screen w-full flex-col bg-background"
        style={backgroundStyle}
      >
        <div className="fixed top-4 right-4 flex items-center gap-2 z-10">
          <SettingsButton />
          <ThemeToggle theme={theme} onToggle={toggleTheme} isReady={isThemeReady} />
        </div>
        <BackgroundAttribution background={currentBackground} />

        <div className="flex flex-1 flex-col items-center justify-center px-6 pt-24 sm:px-8">
          <div className="flex flex-col items-center gap-4">
            <TimeWidget />
            <DateWidget />
          </div>
        </div>

        {connectedCount > 0 && (
          <div className="flex justify-center pb-16" suppressHydrationWarning>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToDetails}
              className="text-muted-foreground hover:text-foreground"
            >
              Details
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      {connectedCount > 0 && (
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
