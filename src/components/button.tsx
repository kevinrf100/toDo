import { Skeleton } from '@/components/skeleton';
import { cva, cx, type VariantProps } from 'class-variance-authority';

const buttonVariant = cva(
  [
    'flex',
    'items-center',
    'justify-center',
    'cursor-pointer',
    'transition',
    'group',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
    'text-nowrap',
  ],
  {
    variants: {
      variant: {
        primary: 'rounded-lg gap-2 text-base leading-6 font-semibold',
        icon: 'inline-flex rounded',
      },
      color: {
        pink: "bg-pink-light  [&_svg:not([class*='text-'])]:text-pink-base hover:bg-pink-dark [&_svg:not([class*='text-'])]:hover:text-white",
        green: 'bg-green-base hover:bg-green-dark text-white',
        gray: "bg-gray-200 [&_svg:not([class*='text-'])]:text-pink-base hover:bg-pink-light text-gray-400",
        transparent:
          "bg-transparent [&_svg:not([class*='text-'])]:text-gray-300 [&_svg:not([class*='text-'])]:hover:text-gray-400 hover:bg-gray-200",
      },
      size: {
        sm: "p-1 w-6 h-6 [&_svg:not([class*='w-'])]:w-5[&_svg:not([class*='h-'])]:h-5 ",
        md: "h-14 px-5 py-4 [&_svg:not([class*='w-'])]:w-5 [&_svg:not([class*='h-'])]:h-5",
        full: 'w-full py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      color: 'gray',
      size: 'md',
    },
  },
);

const buttonSkeletonVariants = cva('', {
  variants: {
    variant: {
      primary: 'rounded-lg',
      icon: 'rounded',
    },
    size: {
      sm: 'w-6 h-6 p-1',
      md: 'h-14 w-32 px-5 py-4',
      full: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariant> & {
    loading?: boolean;
  };

const Button = ({
  className,
  variant,
  color,
  size,
  loading,
  children,
  ...props
}: ButtonProps) => {
  if (loading) {
    return (
      <Skeleton className={cx(buttonSkeletonVariants({ variant, size }))} />
    );
  }

  return (
    <button
      className={cx(buttonVariant({ variant, color, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
