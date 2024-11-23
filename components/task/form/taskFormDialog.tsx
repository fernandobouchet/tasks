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

interface Props {
  boardId: string;
}

const TaskFormDialog = ({ boardId }: Props) => {
  const [open, setIsOpen] = useState(false);

  const handleSetIsOpen = () => {
    setIsOpen(!open);
  };

  return (
    <Dialog open={open} onOpenChange={handleSetIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-60">Create new task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new task</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <TaskForm boardId={boardId} handleSetIsOpen={handleSetIsOpen} />
      </DialogContent>
    </Dialog>
  );
};
export { TaskFormDialog };
