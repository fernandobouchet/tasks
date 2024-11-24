import { KanbanBoard } from "@/components/task/kanban/kanbanBoard";
import { KanbanProvider } from "@/context/kanbanContext";
import { getAllTaskFromBoardId } from "@/lib/actions/task/getAllTaskFromBoardId";
import { getTasksByStatus } from "@/lib/functions";
import { Task } from "@/types";

interface Props {
  params: {
    boardId: string;
  };
}

export default async function Kanban({ params }: Props) {
  const boardId = params.boardId;

  const data = (await getAllTaskFromBoardId(boardId)) as Task[];

  const filteredColumns = getTasksByStatus(data);

  return (
    <KanbanProvider filteredColumns={filteredColumns}>
      <section>
        <div className="py-4">
          <KanbanBoard boardId={boardId} />
        </div>
      </section>
    </KanbanProvider>
  );
}
