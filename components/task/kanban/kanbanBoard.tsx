"use client";

import { DragDropContext } from "@hello-pangea/dnd";
import { TaskColumn } from "./taskColumn";
import { useKanbanContext } from "@/context/kanbanContext";

interface Props {
  boardId: string;
}

function KanbanBoard({ boardId }: Props) {
  const { columns, onDragEnd } = useKanbanContext();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        {columns.map((column) => (
          <TaskColumn key={column.status} column={column} boardId={boardId} />
        ))}
      </div>
    </DragDropContext>
  );
}

export { KanbanBoard };
