import { NewTaskForm } from "@/components/task/form/newTaskForm";
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
          {data.map((item) => (
            <p key={item.taskId}>{item.title}</p>
          ))}
        </div>
      </section>
    </div>
  );
}
