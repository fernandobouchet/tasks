import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Calendar, MoveUpRight } from "lucide-react";
import { formatDate } from "@/lib/functions";

interface Props {
  board: Board;
}

const BoardCard = ({ board }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{board.title}</CardTitle>
        <CardDescription>{board.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <span className="flex items-center gap-1 text-xs lg:text-sm text-muted-foreground">
          <Calendar className="w-4" />
          {formatDate(board.createdAt)}
        </span>
      </CardContent>
      <CardFooter className="flex justify-center w-full">
        <Button asChild className="flex items-center gap-2 w-full">
          <Link href={`/dashboard/${board.boardId}`}>
            Go to dashboard
            <MoveUpRight />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
export { BoardCard };
