import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { Input } from '@/components/input';
import { Text } from '@/components/text';
import { Toggle } from '@/components/toggle';
import { useTask } from '@/hooks/use-task';
import type { Task } from '@/models/task';
import { CheckIcon, PencilIcon, TrashIcon, XIcon } from '@phosphor-icons/react';
import { cx } from 'class-variance-authority';
import { useState, type ChangeEvent, type FormEvent } from 'react';

type TaskItemProps = {
  task: Task;
};

const TaskItem = ({ task }: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(task.state === 'created');
  const [taskTitle, setTaskTitle] = useState(task.title);
  const { updateTask } = useTask();

  const handleEditText = () => {
    setIsEditing(true);
  };

  const handleExitEdit = () => {
    setIsEditing(false);
  };

  const handleOnChangeTaskTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleSubmitTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  };

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <Toggle value={String(task.completed)} checked={task.completed} />
          <Text className={cx('flex-1', { 'line-through': task.completed })}>
            {task.title}
          </Text>
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
        </div>
      ) : (
        <form onSubmit={handleSubmitTask} className="flex items-center gap-4">
          <Input
            className="flex-1"
            value={taskTitle}
            onChange={handleOnChangeTaskTitle}
            required
            autoFocus
            placeholder="Type your task title."
          />
          <div className="flex gap-1">
            <Button
              variant="icon"
              color="transparent"
              size="sm"
              onClick={handleExitEdit}
            >
              <XIcon />
            </Button>
            <Button variant="icon" color="transparent" size="sm" type="submit">
              <CheckIcon />
            </Button>
          </div>
        </form>
      )}
    </Card>
  );
};

export { TaskItem };
