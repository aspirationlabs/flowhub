'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';

export function Shell({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('relative flex min-h-screen w-full flex-col bg-background', className)} {...props} />
  );
}

export function ShellContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex flex-1 flex-col px-6 pb-16 pt-24 sm:px-8', className)} {...props} />;
}
