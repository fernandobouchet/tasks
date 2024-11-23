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
}
const UpdateTaskFormDialog = ({ open, handleOpenChange, task }: Props) => {
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
        />
      </DialogContent>
    </Dialog>
  );
};
export { UpdateTaskFormDialog };
