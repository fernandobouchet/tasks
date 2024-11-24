import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Calendar, MoreHorizontal, MoveUpRight } from "lucide-react";
import { formatDate } from "@/lib/functions";
import { BoardWithPartialTasks } from "@/types";
import { Badge } from "../ui/badge";
import { BoardOptions } from "./boardOptions";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";

interface Props {
  board: BoardWithPartialTasks;
}

const BoardCard = ({ board }: Props) => {
  return (
    <Card className="flex flex-col lg:w-64 lg:h-80">
      <CardHeader>
        <div className="ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MoreHorizontal />
              <span className="sr-only">More</span>
            </DropdownMenuTrigger>
            <BoardOptions board={board} />
          </DropdownMenu>
        </div>
        <CardTitle>{board.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p>{board.shortName}</p>
        <span className="flex items-center gap-1 text-xs lg:text-sm text-muted-foreground">
          <Calendar className="w-4" />
          {formatDate(board.createdAt)}
        </span>
        <Badge variant="outline" className="w-fit">
          {board.tasks.length} tasks
        </Badge>
      </CardContent>
      <CardFooter className="flex justify-center mt-auto w-full">
        <Button asChild className="flex items-center gap-2 w-full">
          <Link href={`/dashboard/boards/${board.boardId}`}>
            Go to board
            <MoveUpRight />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
export { BoardCard };
