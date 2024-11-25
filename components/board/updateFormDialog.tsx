import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BoardForm } from "./boardForm";
import { BoardWithPartialTasks } from "@/types";
import { useTranslations } from "next-intl";

interface Props {
  open: boolean;
  handleOpenChange: () => void;
  board: BoardWithPartialTasks;
}
const UpdateBoardFormDialog = ({ open, handleOpenChange, board }: Props) => {
  const t = useTranslations("board");

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("updateDialog")}</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <BoardForm onOpenChange={handleOpenChange} board={board} />
      </DialogContent>
    </Dialog>
  );
};
export { UpdateBoardFormDialog };
