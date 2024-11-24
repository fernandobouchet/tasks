"use client";

import { Droppable } from "@hello-pangea/dnd";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { TaskItem } from "./taskItem";
import { KanbanColumn } from "@/types";
import { TaskKanbanFormDialog } from "./taskKanbanFormDialog";

interface Props {
  column: KanbanColumn;
  boardId: string;
}

const TaskColumn = ({ column, boardId }: Props) => {
  return (
    <Card className={`w-full lg:w-1/4 shadow`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 py-2">
        <CardTitle className="text-sm font-medium">{column.status}</CardTitle>
        <TaskKanbanFormDialog boardId={boardId} columnId={column.status} />
      </CardHeader>
      <CardContent className="p-2">
        <Droppable droppableId={column.status}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {column.tasks.map((task, index) => (
                <TaskItem
                  key={index}
                  task={task}
                  index={index}
                  column={column}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </CardContent>
    </Card>
  );
};

export { TaskColumn };
