import { TaskPriority } from "@/types";
import { Badge } from "../ui/badge";

interface Props {
  priority: TaskPriority;
}

const TaskPriorityBadge = ({ priority }: Props) => {
  const priorityConfig = {
    LOW: { label: "LOW", color: "bg-gray-200 text-gray-800" },
    MEDIUM: { label: "MEDIUM", color: "bg-orange-200 text-orange-800" },
    HIGH: { label: "HIGH", color: "bg-red-200 text-red-800" },
  };

  const { label, color } = priorityConfig[priority];

  return (
    <Badge
      className={`${color} font-semibold items-center justify-center text-nowrap`}
    >
      {label}
    </Badge>
  );
};

export { TaskPriorityBadge };
