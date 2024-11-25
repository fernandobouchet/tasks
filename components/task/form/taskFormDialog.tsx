"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TaskForm } from "./taskForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface Props {
  boardId: string;
}

const TaskFormDialog = ({ boardId }: Props) => {
  const t = useTranslations("task.form");

  const [open, setIsOpen] = useState(false);

  const handleSetIsOpen = () => {
    setIsOpen(!open);
  };

  return (
    <Dialog open={open} onOpenChange={handleSetIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-60">{t("newTaskDialog")}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("newTaskDialog")}</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <TaskForm boardId={boardId} handleSetIsOpen={handleSetIsOpen} />
      </DialogContent>
    </Dialog>
  );
};
export { TaskFormDialog };
