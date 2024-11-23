"use client";

import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { TaskColumn } from "./taskColumn";
import { getTasksByStatus, reorderTasks } from "@/lib/functions";
import { Task, TaskStatus } from "@/types";
import { useState } from "react";
import { updateTask } from "@/lib/actions/task/updateTask";

interface Props {
  tasks: Task[];
  boardId: string;
}

function KanbanBoard({ tasks, boardId }: Props) {
  const filteredColumns = getTasksByStatus(tasks);

  const [columns, setColumns] = useState(filteredColumns);

  const onDragEnd = async (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const newColumns = reorderTasks(columns, source, destination);
    setColumns(newColumns);

    const sourceColumn = columns.find(
      (col) => col.status === source.droppableId
    );

    const task = sourceColumn?.tasks[source.index];
    const newStatus: TaskStatus = destination?.droppableId as TaskStatus;

    if (task && newStatus !== task.status) {
      const updatedTask = { ...task, status: newStatus };
      try {
        await updateTask(updatedTask);
      } catch (error) {
        console.error("Error al actualizar la tarea:", error);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        {columns.map((column) => (
          <TaskColumn
            key={column.status}
            column={column}
            setColumns={setColumns}
            columns={columns}
            boardId={boardId}
          />
        ))}
      </div>
    </DragDropContext>
  );
}

export { KanbanBoard };
