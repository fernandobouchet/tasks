import { TaskFormDialog } from "@/components/task/form/taskFormDialog";
import { columns } from "@/components/task/table/columns";
import { DataTable } from "@/components/task/table/dataTable";
import { getAllTaskFromBoardId } from "@/lib/actions/task/getAllTaskFromBoardId";
import { notFound } from "next/navigation";

interface Props {
  params: {
    boardId: string;
  };
}

export default async function Board({ params }: Props) {
  const boardId = params.boardId;
  const tasks = await getAllTaskFromBoardId(boardId);

  if (!tasks) {
    return notFound();
  }

  return (
    <div>
      <section>
        <TaskFormDialog boardId={boardId} />
        <div>
          <DataTable columns={columns} data={tasks} />
        </div>
      </section>
    </div>
  );
}
