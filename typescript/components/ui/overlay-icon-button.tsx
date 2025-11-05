import * as React from 'react';
import { type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface OverlayIconButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  'aria-label': string;
  className?: string;
  badge?: React.ReactNode;
  disabled?: boolean;
}

export const OverlayIconButton = React.forwardRef<
  HTMLButtonElement,
  OverlayIconButtonProps
>(({ icon: Icon, onClick, 'aria-label': ariaLabel, className, badge, disabled }, ref) => {
  return (
    <div className="relative inline-flex">
      <Button
        ref={ref}
        variant="ghost"
        size="sm"
        onClick={onClick}
        aria-label={ariaLabel}
        disabled={disabled}
        className={cn(
          'bg-transparent hover:bg-card/80 backdrop-blur transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          className,
        )}
      >
        <Icon className="h-4 w-4" />
      </Button>
      {badge && (
        <div className="absolute -top-1 -right-1 pointer-events-none">{badge}</div>
      )}
    </div>
  );
});

OverlayIconButton.displayName = 'OverlayIconButton';
