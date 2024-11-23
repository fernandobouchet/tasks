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
    CANCELED: { label: "CANCELED", color: "bg-green-200 text-green-800" },
  };

  const { label, color } = statusConfig[status];

  return (
    <Badge className={`${color} font-semibold disabled:pointer-events-none`}>
      {label}
    </Badge>
  );
};

export { TaskStatusBadge };
