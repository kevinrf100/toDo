import { CheckIcon, PlusIcon, TrashIcon, XIcon } from "@phosphor-icons/react";
import { Button } from "./components/button";
import { Badge } from "./components/badge";
import { Text } from "./components/text";

function App() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Text variant="body-md-bold">Checking badges</Text>
      <div className="flex flex-row gap-2">
        <Badge variant="secondary">0</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>
      <Text variant="body-md-bold">Checking Buttons</Text>
      <div className="flex flex-row gap-2">
        <Button>
          <PlusIcon /> Nova Tarefa
        </Button>
        <Button disabled>
          <PlusIcon /> Nova Tarefa
        </Button>
        <Button variant="icon" color="transparent" size="sm">
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
    </div>
  );
}

export { App };
