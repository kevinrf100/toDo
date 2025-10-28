import { cx } from 'class-variance-authority';

type MainContentProps = React.ComponentProps<'main'>;

const MainContent = ({ children, className, ...props }: MainContentProps) => {
  return (
    <main className={cx('mt-4 md:mt-8', className)} {...props}>
      {children}
    </main>
  );
};

export { MainContent };
