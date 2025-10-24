import { cva, cx, type VariantProps } from 'class-variance-authority';
import React from 'react';

const cardVariants = cva(
  'rounded-lg border border-solid border-gray-200 bg-white shadow-sm ',
  {
    variants: {
      size: {
        none: '',
        md: 'p-5',
      },
    },
    defaultVariants: {
      size: 'none',
    },
  },
);

type CardPros = React.ComponentProps<'div'> &
  VariantProps<typeof cardVariants> & {
    as?: keyof React.JSX.IntrinsicElements;
  };

const Card = ({
  as = 'div',
  className,
  size,
  children,
  ...props
}: CardPros) => {
  return React.createElement(
    as,
    { className: cx(cardVariants({ size }), className), ...props },
    children,
  );
};

export { Card };
