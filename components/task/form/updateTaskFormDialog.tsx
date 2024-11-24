import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Task } from "@/types";
import { TaskForm } from "./taskForm";

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
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
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
