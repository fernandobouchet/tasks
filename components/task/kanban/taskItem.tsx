import { Task } from "@/types";
import { Draggable } from "@hello-pangea/dnd";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "../../ui/button";
import { TaskOptions } from "../taskOptions";

interface Props {
  task: Task;
  index: number;
  column: {
    tasks: Task[];
    status: string;
  };
  deleteTask: (columnId: string, taskId: string) => void;
}

const TaskItem = ({ task, index, column, deleteTask }: Props) => {
  return (
    <Draggable key={task.taskId} draggableId={task.taskId} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="rounded-md border bg-card text-card-foreground shadow-sm"
        >
          <div className="p-4 flex justify-between items-center">
            <span>{task.title}</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <TaskOptions task={task} />
            </DropdownMenu>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export { TaskItem };
