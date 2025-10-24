import { cva, cx, type VariantProps } from 'class-variance-authority';
import type React from 'react';

const skeletonVariants = cva('animate-pulse bg-gray-200 w-full', {
  variants: {
    rounded: {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded',
    },
  },
  defaultVariants: {
    rounded: 'lg',
  },
});

type SkeletonProps = VariantProps<typeof skeletonVariants> &
  React.ComponentProps<'div'>;

const Skeleton = ({ className, rounded, ...props }: SkeletonProps) => {
  return (
    <div className={cx(skeletonVariants({ rounded }), className)} {...props} />
  );
};

export { Skeleton };
