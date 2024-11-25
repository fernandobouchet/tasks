import { TaskPriority } from "@/types";
import { Badge } from "../ui/badge";
import { useTranslations } from "next-intl";

interface Props {
  priority: TaskPriority;
}

const TaskPriorityBadge = ({ priority }: Props) => {
  const t = useTranslations("priorityBadge");

  const priorityConfig = {
    LOW: { label: t("LOW"), color: "bg-gray-200 text-gray-800" },
    MEDIUM: { label: t("MEDIUM"), color: "bg-orange-200 text-orange-800" },
    HIGH: { label: t("HIGH"), color: "bg-red-200 text-red-800" },
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
