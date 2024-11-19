import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle,
  CircleOff,
  HelpCircle,
  Timer,
} from "lucide-react";

export const statuses = [
  {
    value: "todo",
    label: "TODO",
    icon: HelpCircle,
  },
  {
    value: "in progress",
    label: "IN_PROGRESS",
    icon: Timer,
  },
  {
    value: "completed",
    label: "COMPLETED",
    icon: CheckCircle,
  },
  {
    value: "canceled",
    label: "CANCELED",
    icon: CircleOff,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "LOW",
    icon: ArrowDown,
  },
  {
    label: "Medium",
    value: "MEDIUM",
    icon: ArrowRight,
  },
  {
    label: "High",
    value: "HIGH",
    icon: ArrowUp,
  },
];
