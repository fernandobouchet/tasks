import { BoardsData } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface Props {
  boards: BoardsData;
}

const StatsCard = ({ boards }: Props) => {
  const totalBoards = boards.length;
  const totalTasks = boards.reduce((acc, board) => acc + board.tasks.length, 0);
  const completedTasks = boards.reduce(
    (acc, board) =>
      acc + board.tasks.filter((task) => task.status === "COMPLETED").length,
    0
  );
  const completionRate =
    totalTasks > 0 ? ((completedTasks / totalTasks) * 100).toFixed(1) : "0";

  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Boards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalBoards}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalTasks}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{completedTasks}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{completionRate}%</div>
        </CardContent>
      </Card>
    </div>
  );
};
export { StatsCard };
