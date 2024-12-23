"use client";

import { Droppable } from "@hello-pangea/dnd";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { TaskItem } from "./taskItem";
import { KanbanColumn } from "@/types";
import { TaskKanbanFormDialog } from "./taskKanbanFormDialog";
import { useTranslations } from "next-intl";

interface Props {
  column: KanbanColumn;
  boardId: string;
}

const TaskColumn = ({ column, boardId }: Props) => {
  const t = useTranslations("Kanban");

  return (
    <Card
      className={`w-full lg:w-1/4 border status-${column.status.toLowerCase()}`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 py-2">
        <CardTitle className="text-base font-semibold text-inherit">
          {t(column.status)}
        </CardTitle>
        <TaskKanbanFormDialog boardId={boardId} columnId={column.status} />
      </CardHeader>
      <CardContent className="p-2 h-full">
        <Droppable droppableId={column.status}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2 h-full"
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
