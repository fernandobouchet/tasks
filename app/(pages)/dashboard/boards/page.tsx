import { BoardCard } from "@/components/board/boardCard";
import { getAllBoards } from "@/lib/actions/board/getAllBoards";

export default async function Boards() {
  const data = await getAllBoards();

  return (
    <div>
      <div className="pb-4">
        <h1>Boards</h1>
      </div>
      {data.length !== 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data.map((board) => (
            <BoardCard key={board.boardId} board={board} />
          ))}
        </section>
      ) : (
        <section>
          <p>
            There are no boards yet! Please create a new one from the side menu
            option.
          </p>
        </section>
      )}
    </div>
  );
}
