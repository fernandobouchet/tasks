"use client";

import { Edit, Trash2, View } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Task } from "@/types";
import { DeleteTaskAlert } from "./deleteTaskAlert";
import { TaskViewCard } from "./taskViewCard";
import { UpdateTaskFormDialog } from "./form/updateTaskFormDialog";

interface Props {
  task: Task;
}

const TaskOptions = ({ task }: Props) => {
  const isMobile = useIsMobile();
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openView, setOpenView] = useState(false);

  const handleOpenDelete = () => {
    setOpenDelete(!openDelete);
  };

  const handleOpenEdit = () => {
    setOpenEdit(!openEdit);
  };

  const handleOpenView = () => {
    setOpenView(!openView);
  };

  return (
    <>
      <DropdownMenuContent
        className="w-fit rounded-lg"
        side={isMobile ? "right" : "bottom"}
        align={isMobile ? "end" : "start"}
      >
        <DropdownMenuItem className="cursor-pointer" onClick={handleOpenView}>
          <View className="text-muted-foreground" />
          <span>View Task</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={handleOpenEdit}>
          <Edit className="text-muted-foreground" />
          <span>Edit Task</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleOpenDelete} className="cursor-pointer">
          <Trash2 className="text-muted-foreground" />
          <span>Delete Task</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
      <DeleteTaskAlert
        open={openDelete}
        handleOpen={handleOpenDelete}
        task={task}
      />
      <UpdateTaskFormDialog
        open={openEdit}
        handleOpenChange={handleOpenEdit}
        task={task}
      />
      <TaskViewCard
        open={openView}
        handleOpenChange={handleOpenView}
        task={task}
      />
    </>
  );
};
export { TaskOptions };
