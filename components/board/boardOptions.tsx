"use client";

import { Edit, Trash2 } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { DeleteBoardAlert } from "./deleteBoardAlert";
import { useState } from "react";
import { UpdateBoardFormDialog } from "./updateFormDialog";
import { BoardWithPartialTasks } from "@/types";
import { useTranslations } from "next-intl";

interface Props {
  board: BoardWithPartialTasks;
}

const BoardOptions = ({ board }: Props) => {
  const t = useTranslations("board.options");
  const isMobile = useIsMobile();
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleOpenDelete = () => {
    setOpenDelete(!openDelete);
  };

  const handleOpenEdit = () => {
    setOpenEdit(!openEdit);
  };

  return (
    <>
      <DropdownMenuContent
        className="w-48 rounded-lg"
        side={"bottom"}
        align={isMobile ? "end" : "start"}
      >
        <DropdownMenuItem className="cursor-pointer" onClick={handleOpenEdit}>
          <Edit className="text-muted-foreground" />
          <span>{t("edit")}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleOpenDelete} className="cursor-pointer">
          <Trash2 className="text-muted-foreground" />
          <span>{t("delete")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
      <DeleteBoardAlert
        open={openDelete}
        handleOpen={handleOpenDelete}
        boardId={board.boardId}
      />
      <UpdateBoardFormDialog
        open={openEdit}
        handleOpenChange={handleOpenEdit}
        board={board}
      />
    </>
  );
};
export { BoardOptions };
