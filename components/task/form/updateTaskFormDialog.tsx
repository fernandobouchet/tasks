import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Task } from "@/types";
import { TaskForm } from "./taskForm";
import { useTranslations } from "next-intl";

interface Props {
  open: boolean;
  handleOpenChange: () => void;
  task: Task;
  kanbanUpdateTask?: (updatedTask: Task) => void;
}
const UpdateTaskFormDialog = ({
  open,
  handleOpenChange,
  task,
  kanbanUpdateTask,
}: Props) => {
  const t = useTranslations("task.form");

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("updateTaskTitle")}</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <TaskForm
          handleSetIsOpen={handleOpenChange}
          boardId={task.boardId}
          task={task}
          kanbanUpdateTask={kanbanUpdateTask}
        />
      </DialogContent>
    </Dialog>
  );
};
export { UpdateTaskFormDialog };
