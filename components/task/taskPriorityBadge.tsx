import { TaskPriority } from "@/types";
import { Badge } from "../ui/badge";
import { useTranslations } from "next-intl";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";

interface Props {
  priority: TaskPriority;
}

const TaskPriorityBadge = ({ priority }: Props) => {
  const t = useTranslations("priorityBadge");

  const priorityConfig = {
    LOW: {
      label: t("LOW"),
      color: "bg-gray-200 text-gray-800",
      icon: <ArrowDown />,
    },
    MEDIUM: {
      label: t("MEDIUM"),
      color: "bg-orange-200 text-orange-800",
      icon: <ArrowRight />,
    },
    HIGH: {
      label: t("HIGH"),
      color: "bg-red-200 text-red-800",
      icon: <ArrowUp />,
    },
  };

  const { label, color, icon } = priorityConfig[priority];

  return (
    <Badge
      className={`${color} font-semibold text-nowrap gap-2 mx-auto h-7 px-2`}
    >
      <span className="[&>*]:w-4">{icon}</span> {label}
    </Badge>
  );
};

export { TaskPriorityBadge };
