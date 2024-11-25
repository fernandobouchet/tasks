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
      color: "bg-yellow-200 text-yellow-800",
      icon: <HelpCircle />,
    },
    IN_PROGRESS: {
      label: t("IN_PROGRESS"),
      color: "bg-blue-200 text-blue-800",
      icon: <Timer />,
    },
    COMPLETED: {
      label: t("COMPLETED"),
      color: "bg-green-200 text-green-800",
      icon: <CheckCircle />,
    },
    CANCELED: {
      label: t("CANCELED"),
      color: "bg-red-200 text-red-800",
      icon: <CircleOff />,
    },
  };

  const { label, color, icon } = statusConfig[status];

  return (
    <Badge
      className={`${color} font-semibold text-nowrap gap-2 mx-auto h-7 px-2`}
    >
      <span className="[&>*]:w-4">{icon}</span> {label}
    </Badge>
  );
};

export { TaskStatusBadge };
