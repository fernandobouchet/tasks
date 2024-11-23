import { Task } from "@/types";
import { DraggableLocation } from "@hello-pangea/dnd";

const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const boardRouteRegex = /^(\/dashboard)?\/boards\/[a-z0-9]{25}(\/[\w-]+)?$/;

const isBoardRoute = (route: string) => boardRouteRegex.test(route);

const getTasksByStatus = (tasks: Task[]) => {
  const columns: { [key: string]: Task[] } = {
    TODO: [],
    IN_PROGRESS: [],
    COMPLETED: [],
    CANCELED: [],
  };

  tasks.forEach((task) => {
    if (columns[task.status]) {
      columns[task.status].push(task);
    }
  });

  return Object.entries(columns).map(([status, tasks]) => ({
    status,
    tasks,
  }));
};

const reorderTasks = (
  columns: {
    status: string;
    tasks: Task[];
  }[],
  source: DraggableLocation<string>,
  destination: DraggableLocation<string>
) => {
  const sourceColumn = columns.find((col) => col.status === source.droppableId);
  const destColumn = columns.find(
    (col) => col.status === destination.droppableId
  );

  if (sourceColumn && destColumn) {
    const sourceTasks = Array.from(sourceColumn.tasks);

    if (source.droppableId === destination.droppableId) {
      const [movedItem] = sourceTasks.splice(source.index, 1);
      sourceTasks.splice(destination.index, 0, movedItem);

      return columns.map((col) =>
        col.status === sourceColumn.status
          ? { ...col, tasks: sourceTasks }
          : col
      );
    } else {
      const destTasks = Array.from(destColumn.tasks);

      const [movedItem] = sourceTasks.splice(source.index, 1);
      destTasks.splice(destination.index, 0, movedItem);

      return columns.map((col) => {
        if (col.status === sourceColumn.status)
          return { ...col, tasks: sourceTasks };
        if (col.status === destColumn.status)
          return { ...col, tasks: destTasks };
        return col;
      });
    }
  }

  return columns;
};

export { formatDate, isBoardRoute, getTasksByStatus, reorderTasks };
