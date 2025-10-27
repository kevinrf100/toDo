import { cva, cx, type VariantProps } from 'class-variance-authority';
import { Skeleton } from './skeleton';
import { Text } from './text';

const badgeVariant = cva(
  'inline-flex items-center justify-center rounded-full',
  {
    variants: {
      variant: {
        primary: 'bg-green-light',
        secondary: 'bg-pink-light',
      },
      size: {
        sm: 'py.0.5 px-2',
        md: 'px-3 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

const badgeTextVariant = cva('text-nowrap', {
  variants: {
    variant: {
      primary: 'text-green-dark',
      secondary: 'text-pink-dark',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const badgeSkeletonVariants = cva('', {
  variants: {
    size: {
      sm: 'h-5 w-5 py.0.5 px-2',
      md: 'w-8 h-8 px-3 py-1.5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type BadgeProps = {
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
} & React.ComponentProps<'div'> &
  VariantProps<typeof badgeVariant>;

const Badge = ({
  children,
  className,
  variant,
  size,
  loading,
  ...props
}: BadgeProps) => {
  if (loading) {
    return (
      <Skeleton
        rounded="full"
        className={cx(badgeSkeletonVariants({ size }))}
      />
    );
  }

  return (
    <div className={cx(badgeVariant({ variant, size }), className)} {...props}>
      <Text
        variant="body-sm-bold"
        className={badgeTextVariant({ variant: variant ?? undefined })}
      >
        {children}
      </Text>
    </div>
  );
};

export { Badge };
