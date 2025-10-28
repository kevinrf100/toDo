import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { Text } from '@/components/text';
import { Toggle } from '@/components/toggle';
import { PencilIcon, TrashIcon } from '@phosphor-icons/react';

const TaskItem = () => {
  return (
    <Card size="md" className="flex items-center gap-4">
      <Toggle />
      <Text className="flex-1">🛍️ Shopping from the week</Text>
      <div className="flex gap-1">
        <Button variant="icon" color="transparent" size="sm">
          <TrashIcon />
        </Button>
        <Button variant="icon" color="transparent" size="sm">
          <PencilIcon />
        </Button>
      </div>
    </Card>
  );
};

export { TaskItem };
