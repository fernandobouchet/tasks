import { KanbanBoard } from "@/components/kanban/kanbanBoard";
import { getAllTaskFromBoardId } from "@/lib/actions/task/getAllTaskFromBoardId";
import { Task } from "@/types";

interface Props {
  params: {
    boardId: string;
  };
}

export default async function Kanban({ params }: Props) {
  const boardId = params.boardId;

  const data = (await getAllTaskFromBoardId(boardId)) as Task[];

  return <KanbanBoard tasks={data} boardId={boardId} />;
}
