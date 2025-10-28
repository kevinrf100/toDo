import { Badge } from '@/components/badge';
import { Text } from '@/components/text';

const TasksSummary = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" color="gray-300">
          Tasks created
        </Text>
        <Badge variant="secondary">5</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" color="gray-300">
          Done
        </Text>
        <Badge variant="primary">2 of 5</Badge>
      </div>
    </div>
  );
};

export { TasksSummary };
