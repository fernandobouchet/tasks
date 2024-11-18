import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NewTaskForm } from "./newTaskForm";
import { Button } from "@/components/ui/button";

interface Props {
  boardId: string;
}

const TaskFormDialog = ({ boardId }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-60">Create new task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new task</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <NewTaskForm boardId={boardId} />
      </DialogContent>
    </Dialog>
  );
};
export { TaskFormDialog };
