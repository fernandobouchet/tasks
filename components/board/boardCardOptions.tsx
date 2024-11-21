"use client";

import { Folder, Forward, MoreHorizontal, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { DeleteBoardAlert } from "./deleteBoardAlert";
import { useState } from "react";
import { Board } from "@/types";

interface Props {
  board: Board;
}

const BoardCardOptions = ({ board }: Props) => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreHorizontal />
        <span className="sr-only">More</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-48 rounded-lg"
        side={isMobile ? "bottom" : "right"}
        align={isMobile ? "end" : "start"}
      >
        <DropdownMenuItem className="cursor-pointer">
          <Folder className="text-muted-foreground" />
          <span>View Board</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Forward className="text-muted-foreground" />
          <span>Update Board</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleOpen} className="cursor-pointer">
          <Trash2 className="text-muted-foreground" />
          <span>Delete Board</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
      <DeleteBoardAlert
        open={open}
        handleOpen={handleOpen}
        boardId={board.boardId}
      />
    </DropdownMenu>
  );
};
export { BoardCardOptions };
