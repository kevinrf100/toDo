import { cva, cx, type VariantProps } from 'class-variance-authority';
import React from 'react';

const textVariants = cva('font-sans', {
  variants: {
    variant: {
      'body-sm-bold': 'text-sm leading-5 font-semibold',
      'body-md': 'text-base leading-6 font-normal',
      'body-md-bold': 'text-base leading-6 font-semibold',
    },
    color: {
      'gray-400': 'text-gray-400',
      'gray-300': 'text-gray-300',
      'gray-200': 'text-gray-200',
      white: 'text-white',
    },
  },
  defaultVariants: {
    variant: 'body-md',
    color: 'gray-400',
  },
});

type TextProps = {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
} & VariantProps<typeof textVariants>;

const Text = ({
  as = 'span',
  className,
  children,
  variant,
  color,
  ...props
}: TextProps) => {
  return React.createElement(
    as,
    { className: cx(textVariants({ variant, color, className })), ...props },
    children,
  );
};

export { Text };
