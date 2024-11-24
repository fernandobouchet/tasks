"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { reorderTasks } from "@/lib/functions";
import { updateTask as updateTaskAction } from "@/lib/actions/task/updateTask";
import { KanbanColumn, Task, TaskStatus } from "@/types";
import { DropResult } from "@hello-pangea/dnd";

interface KanbanContextProps {
  columns: KanbanColumn[];
  setColumns: Dispatch<SetStateAction<KanbanColumn[]>>;
  onDragEnd: (result: DropResult) => Promise<void>;
  addNewTask: (newTask: Task, selectedColumn: TaskStatus) => void;
  deleteTask: (taskToDelete: Task) => void;
  updateTask: (updatedTask: Task) => void;
}

const KanbanContext = createContext<KanbanContextProps | null>(null);

export const KanbanProvider = ({
  children,
  filteredColumns,
}: {
  children: ReactNode;
  filteredColumns: KanbanColumn[];
}) => {
  const [columns, setColumns] = useState<KanbanColumn[]>(() => [
    ...filteredColumns,
  ]);

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
        await updateTaskAction({ task: updatedTask });
      } catch (error) {
        console.error("Error al actualizar la tarea:", error);
      }
    }
  };

  const addNewTask = (newTask: Task, selectedColumn: TaskStatus) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.status === selectedColumn
          ? { ...col, tasks: [...col.tasks, newTask] }
          : col
      )
    );
  };

  const deleteTask = (taskToDelete: Task) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.status === taskToDelete.status
          ? {
              ...col,
              tasks: col.tasks.filter(
                (task) => task.taskId !== taskToDelete.taskId
              ),
            }
          : col
      )
    );
  };

  const updateTask = (updatedTask: Task) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) => ({
        ...col,
        tasks: col.tasks.map((task) =>
          task.taskId === updatedTask.taskId ? updatedTask : task
        ),
      }))
    );
  };

  return (
    <KanbanContext.Provider
      value={{
        columns,
        setColumns,
        onDragEnd,
        addNewTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </KanbanContext.Provider>
  );
};

export const useKanbanContext = () => {
  const context = useContext(KanbanContext);
  if (!context)
    throw new Error("useKanbanContext must be used within a KanbanProvider");
  return context;
};
