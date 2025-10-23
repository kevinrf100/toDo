import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "border-0 border-solid border-gray-200 focus:border-pink-base bg-transparent outline-none disabled:pointer-events-none",
  {
    variants: {
      size: {
        md: "pb-8 px-2",
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
