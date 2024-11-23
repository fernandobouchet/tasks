import { TaskFormDialog } from "@/components/task/form/taskFormDialog";
import { columns } from "@/components/task/table/columns";
import { DataTable } from "@/components/task/table/dataTable";
import { getAllTaskFromBoardId } from "@/lib/actions/task/getAllTaskFromBoardId";

interface Props {
  params: {
    boardId: string;
    shortName: string;
  };
}

export default async function Board({ params }: Props) {
  const boardId = params.boardId;

  const data = await getAllTaskFromBoardId(boardId);

  return (
    <div>
      <section>
        <TaskFormDialog boardId={boardId} />
        <div>
          <DataTable columns={columns} data={data} />
        </div>
      </section>
    </div>
  );
}
