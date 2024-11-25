import { Badge } from "@/components/ui/badge";
import { TaskStatus } from "@/types";
import { useTranslations } from "next-intl";

interface Props {
  status: TaskStatus;
}

const TaskStatusBadge = ({ status }: Props) => {
  const t = useTranslations("statusBadge");

  const statusConfig = {
    TODO: { label: t("TODO"), color: "bg-yellow-200 text-yellow-800" },
    IN_PROGRESS: {
      label: t("IN_PROGRESS"),
      color: "bg-blue-200 text-blue-800",
    },
    COMPLETED: { label: t("COMPLETED"), color: "bg-green-200 text-green-800" },
    CANCELED: { label: t("CANCELED"), color: "bg-red-200 text-red-800" },
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
