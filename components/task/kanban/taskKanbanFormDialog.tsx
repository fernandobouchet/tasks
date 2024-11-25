"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { NewTaskKanbanForm } from "./newTaskKanbanForm";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";

interface Props {
  boardId: string;
  columnId: string;
}

const TaskKanbanFormDialog = ({ boardId, columnId }: Props) => {
  const t = useTranslations("Kanban");

  const [open, setIsOpen] = useState(false);

  const handleSetIsOpen = () => {
    setIsOpen(!open);
  };

  return (
    <Dialog open={open} onOpenChange={handleSetIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="w-9 p-0">
          <Plus className="h-4 w-4" />
          <span className="sr-only">Add task</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("newTask")}</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <NewTaskKanbanForm
          boardId={boardId}
          handleSetIsOpen={handleSetIsOpen}
          columnId={columnId}
        />
      </DialogContent>
    </Dialog>
  );
};
export { TaskKanbanFormDialog };
