import toDoLogo from '@/assets/toDoLogo.svg';
import { Container } from '@/components/container';

const Header = () => {
  return (
    <Container as="header" className="mt-3 md:mt-20">
      <img src={toDoLogo} alt="Logo" className="h-12" />
    </Container>
  );
};

export { Header };
