import { Badge } from "@/components/ui/badge";
import { TaskStatus } from "@/types";

interface Props {
  status: TaskStatus;
}

const TaskStatusBadge = ({ status }: Props) => {
  const statusConfig = {
    TODO: { label: "TODO", color: "bg-yellow-200 text-yellow-800" },
    IN_PROGRESS: { label: "IN PROGRESS", color: "bg-blue-200 text-blue-800" },
    COMPLETED: { label: "COMPLETED", color: "bg-green-200 text-green-800" },
    CANCELED: { label: "CANCELED", color: "bg-red-200 text-red-800" },
  };

  const { label, color } = statusConfig[status];

  return (
    <Badge
      className={`${color} font-semibold items-center justify-center text-nowrap`}
    >
      {label}
    </Badge>
  );
};

export { TaskStatusBadge };
