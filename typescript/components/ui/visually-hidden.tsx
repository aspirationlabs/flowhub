'use client';

import React from 'react';
import { cn } from 'lib/utils';

const VisuallyHidden = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({ className, children, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      'absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0',
      className,
    )}
    {...props}
  >
    {children}
  </span>
));

VisuallyHidden.displayName = 'VisuallyHidden';

export { VisuallyHidden };
