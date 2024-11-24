"use client";

import { KanbanColumn, Task } from "@/types";
import { Draggable } from "@hello-pangea/dnd";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "../../ui/button";
import { TaskOptions } from "../taskOptions";
import { useKanbanContext } from "@/context/kanbanContext";

interface Props {
  task: Task;
  index: number;
  column: KanbanColumn;
}

const TaskItem = ({ task, index }: Props) => {
  const { deleteTask, updateTask } = useKanbanContext();

  return (
    <Draggable key={task.taskId} draggableId={task.taskId} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="rounded-md border bg-card text-card-foreground shadow-sm"
        >
          <div className="p-4 flex justify-between items-center gap-2">
            <span className="line-clamp-1">{task.title}</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <TaskOptions
                task={task}
                kanbanDeleteTask={deleteTask}
                kanbanUpdateTask={updateTask}
              />
            </DropdownMenu>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export { TaskItem };
