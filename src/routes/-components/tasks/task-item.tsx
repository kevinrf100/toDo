import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { Input } from '@/components/input';
import { Text } from '@/components/text';
import { Toggle } from '@/components/toggle';
import { CheckIcon, PencilIcon, TrashIcon, XIcon } from '@phosphor-icons/react';
import { useState } from 'react';

const TaskItem = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditText = () => {
    setIsEditing(true);
  };

  const handleExitEdit = () => {
    setIsEditing(false);
  };

  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <Toggle />
          <Text className="flex-1">🛍️ Shopping from the week</Text>
          <div className="flex gap-1">
            <Button variant="icon" color="transparent" size="sm">
              <TrashIcon />
            </Button>
            <Button
              variant="icon"
              color="transparent"
              size="sm"
              onClick={handleEditText}
            >
              <PencilIcon />
            </Button>
          </div>
        </>
      ) : (
        <>
          <Input className="flex-1" />
          <div className="flex gap-1">
            <Button
              variant="icon"
              color="transparent"
              size="sm"
              onClick={handleExitEdit}
            >
              <XIcon />
            </Button>
            <Button variant="icon" color="transparent" size="sm">
              <CheckIcon />
            </Button>
          </div>
        </>
      )}
    </Card>
  );
};

export { TaskItem };
