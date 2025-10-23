import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "text-base font-normal font-sans border-b border-solid border-gray-200 focus:border-pink-base bg-transparent outline-none disabled:pointer-events-none",
  {
    variants: {
      size: {
        md: "pb-2 px-2",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants>;

const Input = ({ className, size, ...props }: InputProps) => {
  return <input className={inputVariants({ size, className })} {...props} />;
};

export { Input };
