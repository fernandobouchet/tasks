import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Task } from "@/types";
import { TaskStatusBadge } from "./taskStatusBadge";
import { TaskPriorityBadge } from "./taskPriorityBadge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { formatDate } from "@/lib/functions";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { useTranslations } from "next-intl";

interface Props {
  open: boolean;
  handleOpenChange: () => void;
  task: Task;
}

const TaskViewCard = ({ open, handleOpenChange, task }: Props) => {
  const t = useTranslations("task.card");

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle />
          <DialogDescription />
        </DialogHeader>
        <Card className="w-full max-w-md border-none bg-inherit">
          <CardHeader>
            <div className="ml-auto">
              <TaskStatusBadge status={task.status} />
            </div>
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl font-bold">{task.title}</CardTitle>
            </div>
            <CardDescription className="mt-2">
              {task.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center text-sm">
                <ClockIcon className="w-4 h-4 mr-2" />
                <span>
                  {t("createdAt")}: {formatDate(task.createdAt)}
                </span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2 text-gray-500" />
                <span className="text-sm text-gray-600">
                  {t("dueDate")}: {formatDate(task.dueDate!)}
                </span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex w-full justify-between text-sm">
            <div>
              <TaskPriorityBadge priority={task.priority} />
            </div>
            <span className="text-gray-500">ID: {task.taskId.slice(0, 8)}</span>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
export { TaskViewCard };
