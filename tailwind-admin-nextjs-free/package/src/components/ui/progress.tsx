import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

// Define the variants using cva
const progressIndicatorVariants = cva('h-full w-full flex-1 transition-all', {
  variants: {
    variant: {
      default: 'bg-primary',
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      success: 'bg-success',
      error: 'bg-error',
      warning: 'bg-warning',
      info: 'bg-info',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

// Extend the props to include variant
interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
  VariantProps<typeof progressIndicatorVariants> {
  value?: number;
}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  ({ className, value, variant, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-1 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-white/15',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(progressIndicatorVariants({ variant }))}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  ),
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress, progressIndicatorVariants };