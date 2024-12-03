import { Badge } from "@/components/ui/badge";
import { TaskStatus } from "@/types";
import { CheckCircle, CircleOff, HelpCircle, Timer } from "lucide-react";
import { useTranslations } from "next-intl";

interface Props {
  status: TaskStatus;
}

const TaskStatusBadge = ({ status }: Props) => {
  const t = useTranslations("statusBadge");

  const statusConfig = {
    TODO: {
      label: t("TODO"),
      icon: <HelpCircle />,
    },
    IN_PROGRESS: {
      label: t("IN_PROGRESS"),
      icon: <Timer />,
    },
    COMPLETED: {
      label: t("COMPLETED"),
      icon: <CheckCircle />,
    },
    CANCELED: {
      label: t("CANCELED"),
      icon: <CircleOff />,
    },
  };

  const { label, icon } = statusConfig[status];

  return (
    <Badge
      className={`status-${status.toLowerCase()} font-semibold text-nowrap gap-2 mx-auto h-7 px-2 pointer-events-none`}
    >
      <span className="[&>*]:w-4">{icon}</span> {label}
    </Badge>
  );
};

export { TaskStatusBadge };
