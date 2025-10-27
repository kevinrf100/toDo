import { Skeleton } from '@/components/skeleton';
import { CheckIcon } from '@phosphor-icons/react';
import { cva, cx, type VariantProps } from 'class-variance-authority';

const toggleVariants = cva(
  [
    'appearance-none',
    'peer',
    'rounded-sm',
    'border-2',
    'border-solid',
    'border-green-base',
    'hover:border-green-dark',
    'hover:not-checked:bg-green-dark/20',
    'hover:checked:bg-green-dark',
    'cursor-pointer',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
    'checked:bg-green-base',
    'transition',
  ],
  {
    variants: {
      size: {
        md: 'w-5 h-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const toggleSkeletonVariants = cva('self-center', {
  variants: {
    size: {
      md: 'w-5 h-5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type ToggleProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof toggleVariants> & {
    loading?: boolean;
  };

const Toggle = ({ className, size, loading, ...props }: ToggleProps) => {
  if (loading) {
    return (
      <Skeleton className={cx(toggleSkeletonVariants({ size }))} rounded="sm" />
    );
  }

  return (
    <label className="relative inline-flex items-center justify-center">
      <input
        type="checkbox"
        className={cx(toggleVariants({ size }), className)}
        {...props}
      />
      <CheckIcon
        aria-hidden={true}
        className="pointer-events-none absolute inset-0 hidden h-full w-full p-1 text-white peer-checked:block"
      />
    </label>
  );
};

export { Toggle };
