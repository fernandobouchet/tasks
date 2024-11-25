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
import { useTranslations } from "next-intl";

interface Props {
  open: boolean;
  handleOpen: () => void;
  task: Task;
  kanbanDeleteTask?: (taskToDelete: Task) => void;
}

const DeleteTaskAlert = ({
  open,
  handleOpen,
  task,
  kanbanDeleteTask,
}: Props) => {
  const t = useTranslations("task.deleteAlert");

  const handleDelete = async () => {
    try {
      handleOpen();
      await deleteTask(task);
      if (kanbanDeleteTask) {
        kanbanDeleteTask(task);
      }
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
          <AlertDialogTitle>{t("title")}</AlertDialogTitle>
          <AlertDialogDescription>{t("description")}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleOpen}>
            {t("cancelButton")}
          </AlertDialogCancel>
          <Button variant={"destructive"} onClick={handleDelete}>
            {t("deleteButton")}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export { DeleteTaskAlert };
