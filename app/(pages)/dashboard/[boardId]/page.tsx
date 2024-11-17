import { NewTaskForm } from "@/components/task/form/newTaskForm";
import { columns } from "@/components/task/table/columns";
import { DataTable } from "@/components/task/table/dataTable";
import { getAllTaskFromBoardId } from "@/lib/actions/task/getAllTaskFromBoardId";

interface Props {
  params: {
    boardId: string;
  };
}

export default async function Board({ params }: Props) {
  const boardId = params.boardId;

  const data = await getAllTaskFromBoardId(boardId);

  return (
    <div>
      <section>
        <NewTaskForm boardId={boardId} />
        <div>
          <DataTable columns={columns} data={data} />
        </div>
      </section>
    </div>
  );
}
