import { Droppable } from "@hello-pangea/dnd";
import { Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Button } from "../../ui/button";

import { TaskItem } from "./taskItem";
import { Dispatch, SetStateAction, useState } from "react";
import { Task } from "@/types";
import { NewTaskKanbanForm } from "./newTaskKanbanForm";

interface Props {
  column: {
    tasks: Task[];
    status: string;
  };
  setColumns: Dispatch<
    SetStateAction<
      {
        status: string;
        tasks: Task[];
      }[]
    >
  >;
  columns: {
    tasks: Task[];
    status: string;
  }[];
  boardId: string;
}

const TaskColumn = ({ column, columns, setColumns, boardId }: Props) => {
  const [addingToColumn, setAddingToColumn] = useState<string | null>(null);

  const addNewTask = (newTask: Task, columnId: string) => {
    const newColumns = columns.map((col) =>
      col.status === columnId ? { ...col, tasks: [...col.tasks, newTask] } : col
    );
    setColumns(newColumns);
    setAddingToColumn(null);
  };

  const deleteTask = (columnId: string, taskId: string) => {
    const newColumns = columns.map((col) =>
      col.status === columnId
        ? { ...col, tasks: col.tasks.filter((task) => task.status !== taskId) }
        : col
    );
    setColumns(newColumns);
  };

  return (
    <Card className={`w-full lg:w-1/4 shadow`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 py-2">
        <CardTitle className="text-sm font-medium">{column.status}</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="w-9 p-0"
          onClick={() => setAddingToColumn(column.status)}
        >
          <Plus className="h-4 w-4" />
          <span className="sr-only">Add task</span>
        </Button>
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
                  deleteTask={deleteTask}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        {addingToColumn === column.status && (
          <NewTaskKanbanForm
            boardId={boardId}
            setAddingToColumn={setAddingToColumn}
            addNewTask={addNewTask}
            columnId={column.status}
          />
        )}
      </CardContent>
    </Card>
  );
};

export { TaskColumn };
