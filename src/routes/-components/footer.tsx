import { Text } from '@/components/text';
import { Link } from '@tanstack/react-router';

const Footer = () => {
  return (
    <footer className="my-5 flex items-center justify-center gap-4 md:my-10">
      <Link
        to="/"
        activeProps={{
          className: '[&_span]:text-pink-base',
        }}
      >
        <Text variant="body-sm-bold">Home Page</Text>
      </Link>
      <Link
        to="/components"
        activeProps={{
          className: '[&_span]:text-pink-base',
        }}
      >
        <Text variant="body-sm-bold">Components</Text>
      </Link>
    </footer>
  );
};

export { Footer };
