import { TasksPie } from "@/components/dashboard/tasksPie";
import { StatsCard } from "@/components/dashboard/statsCard";
import { getBoardsData } from "@/lib/actions/board/getBoardsData";

export default async function Home() {
  const boardsData = await getBoardsData();

  return (
    <div>
      <div className="pb-4">
        <h1>Home</h1>
        <section className="flex flex-col gap-4 py-4">
          {boardsData ? (
            <>
              <div>
                <StatsCard boards={boardsData} />
              </div>
              <div>
                <TasksPie boards={boardsData} />
              </div>
            </>
          ) : (
            <p>There is no dashboard or tasks yet.</p>
          )}
        </section>
      </div>
    </div>
  );
}
