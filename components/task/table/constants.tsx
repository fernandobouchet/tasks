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
    value: "TODO",
    label: "Todo",
    icon: HelpCircle,
  },
  {
    value: "IN_PROGRESS",
    label: "In progress",
    icon: Timer,
  },
  {
    value: "COMPLETED",
    label: "Completed",
    icon: CheckCircle,
  },
  {
    value: "CANCELED",
    label: "Canceled",
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
