import { cva, cx, type VariantProps } from 'class-variance-authority';
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

const badgeTextVariant = cva('', {
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

type BadgeProps = {
  className?: string;
  children: React.ReactNode;
} & React.ComponentProps<'div'> &
  VariantProps<typeof badgeVariant>;

const Badge = ({
  children,
  className,
  variant,
  size,
  ...props
}: BadgeProps) => {
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
