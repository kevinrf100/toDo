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
  const [taskCompleted, setTaskCompleted] = useState(task.completed);
  const { updateTask, updateTaskStatus, deleteTask } = useTask();

  const handleOnClickEditText = () => {
    setIsEditing(true);
  };

  const handleOnClickExitEdit = () => {
    if (task.state === 'created') {
      deleteTask(task.id);
      return;
    }

    setIsEditing(false);
  };

  const handleOnChangeTaskTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const handleOnSubmitTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  };

  const handleOnChangeTaskStatus = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setTaskCompleted(checked);
    updateTaskStatus(task.id, checked);
  };

  const handleOnClickDeleteTask = () => {
    deleteTask(task.id);
  };

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <Toggle checked={taskCompleted} onChange={handleOnChangeTaskStatus} />
          <Text className={cx('flex-1', { 'line-through': taskCompleted })}>
            {task.title}
          </Text>
          <div className="flex gap-1">
            <Button
              variant="icon"
              color="transparent"
              size="sm"
              onClick={handleOnClickDeleteTask}
            >
              <TrashIcon />
            </Button>
            <Button
              variant="icon"
              color="transparent"
              size="sm"
              onClick={handleOnClickEditText}
            >
              <PencilIcon />
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleOnSubmitTask} className="flex items-center gap-4">
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
              onClick={handleOnClickExitEdit}
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
