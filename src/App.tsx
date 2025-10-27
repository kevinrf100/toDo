import { CheckIcon, PlusIcon, TrashIcon, XIcon } from '@phosphor-icons/react';
import { Badge } from './components/badge';
import { Button } from './components/button';
import { Card } from './components/card';
import { Container } from './components/container';
import { Input } from './components/input';
import { Skeleton } from './components/skeleton';
import { Text } from './components/text';
import { Toggle } from './components/toggle';

function App() {
  return (
    <Container>
      <Text variant="body-md-bold">Checking badges</Text>
      <div className="flex flex-row flex-wrap gap-2">
        <Badge variant="secondary">0</Badge>
        <Badge variant="primary">2 de 5</Badge>
        <Badge loading>2 de 5</Badge>
      </div>
      <Text variant="body-md-bold">Checking inputs</Text>
      <div className="flex flex-row flex-wrap gap-2">
        <Input />
        <Toggle />
        <Toggle loading />
      </div>
      <Text variant="body-md-bold">Checking Buttons</Text>
      <div className="flex flex-row flex-wrap gap-2">
        <Button>
          <PlusIcon /> Nova Tarefa
        </Button>
        <Button loading>
          <PlusIcon /> Nova Tarefa
        </Button>
        <Button disabled>
          <PlusIcon /> Nova Tarefa
        </Button>
        <Button disabled loading>
          <PlusIcon /> Nova Tarefa
        </Button>
        <Button variant="icon" color="transparent" size="sm">
          <TrashIcon />
        </Button>
        <Button variant="icon" color="transparent" size="sm" loading>
          <TrashIcon />
        </Button>
        <Button variant="icon" color="pink" size="sm">
          <XIcon />
        </Button>
        <Button variant="icon" color="green" size="sm">
          <CheckIcon />
        </Button>
        <Button variant="icon" color="green" size="sm" disabled>
          <CheckIcon />
        </Button>
      </div>
      <Text variant="body-md-bold">Checking Card</Text>
      <div className="flex flex-row flex-wrap gap-2">
        <Card size="md">Testing</Card>
      </div>
      <Text variant="body-md-bold">Checking Skeleton</Text>
      <div className="flex flex-row flex-wrap gap-2">
        <Skeleton rounded="full" className="h-6 w-5" />
        <Skeleton className="h-6 w-100" />
        <Skeleton rounded="full" className="h-6 w-100" />
      </div>
    </Container>
  );
}

export { App };
