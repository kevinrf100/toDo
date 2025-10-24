import { cva, cx, type VariantProps } from 'class-variance-authority';
import React from 'react';

const containerVariants = cva('mx-auto', {
  variants: {
    size: {
      md: 'max-w-126 px-2',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type ContainerProps = React.ComponentProps<'div'> &
  VariantProps<typeof containerVariants> & {
    as?: keyof React.JSX.IntrinsicElements;
  };

const Container = ({
  as = 'div',
  size,
  className,
  children,
}: ContainerProps) => {
  return React.createElement(
    as,
    { className: cx(containerVariants({ size }), className) },
    children,
  );
};

export { Container };
