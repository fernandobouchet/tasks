import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Calendar, MoveUpRight } from "lucide-react";
import { formatDate } from "@/lib/functions";
import { Board } from "@/types";
import { BoardCardOptions } from "./boardCardOptions";

interface Props {
  board: Board;
}

const BoardCard = ({ board }: Props) => {
  return (
    <Card className="flex flex-col lg:w-72 h-80">
      <CardHeader>
        <div className="ml-auto">
          <BoardCardOptions board={board} />
        </div>
        <CardTitle>{board.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{board.shortName}</p>
        <span className="flex items-center gap-1 text-xs lg:text-sm text-muted-foreground">
          <Calendar className="w-4" />
          {formatDate(board.createdAt)}
        </span>
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
