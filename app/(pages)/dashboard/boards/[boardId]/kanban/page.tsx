import { KanbanBoard } from "@/components/task/kanban/kanbanBoard";
import { TaskFormDialog } from "@/components/task/form/taskFormDialog";
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

  return (
    <section>
      <TaskFormDialog boardId={boardId} />
      <div className="py-4">
        <KanbanBoard tasks={data} boardId={boardId} />
      </div>
    </section>
  );
}
