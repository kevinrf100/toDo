import { cva, type VariantProps } from "class-variance-authority";

const buttonVariant = cva(
  "flex items-center justify-center cursor-pointer transition group disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      variant: {
        primary: "rounded-lg gap-2 text-base leading-6 font-semibold",
        icon: "inline-flex rounded",
      },
      color: {
        pink: "bg-pink-light [&>svg]:text-pink-base hover:bg-pink-dark [&>svg]:hover:text-white",
        green: "bg-green-base hover:bg-green-dark text-white",
        gray: "bg-gray-200 [&>svg]:text-pink-base hover:bg-pink-light text-gray-400",
        transparent:
          "bg-transparent [&>svg]:text-gray-300 [&>svg]:hover:text-gray-400 hover:bg-pink-light",
      },
      size: {
        sm: "p-1 w-6 h-6 [&>svg]:w-6 [&>svg]:h-6 ",
        md: "h-14 px-5 py-4 [&>svg]:w-5 [&>svg]:h-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      color: "gray",
      size: "md",
    },
  }
);

type buttonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariant>;

const Button = ({
  className,
  variant,
  color,
  size,
  children,
  ...props
}: buttonProps) => {
  return (
    <button
      className={buttonVariant({ variant, color, size, className })}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
