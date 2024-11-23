"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { deleteTask } from "@/lib/actions/task/deleteTask";
import { Task } from "@/types";

interface Props {
  open: boolean;
  handleOpen: () => void;
  task: Task;
}

const DeleteTaskAlert = ({ open, handleOpen, task }: Props) => {
  const handleDelete = async () => {
    try {
      handleOpen();
      await deleteTask(task);
    } catch (error) {
      console.log(error);
      toast.error(
        "Hubo un error al intentar borrar el board, por favor intenta nuevamente."
      );
    }
  };
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the task
            from our database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleOpen}>Cancel</AlertDialogCancel>
          <Button variant={"destructive"} onClick={handleDelete}>
            Continue
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export { DeleteTaskAlert };
