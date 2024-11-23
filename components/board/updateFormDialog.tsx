import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BoardForm } from "./boardForm";
import { BoardWithPartialTasks } from "@/types";

interface Props {
  open: boolean;
  handleOpenChange: () => void;
  board: BoardWithPartialTasks;
}
const UpdateBoardFormDialog = ({ open, handleOpenChange, board }: Props) => {
  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit board</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <BoardForm onOpenChange={handleOpenChange} board={board} />
      </DialogContent>
    </Dialog>
  );
};
export { UpdateBoardFormDialog };
