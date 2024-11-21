import { deleteBoard } from "@/lib/actions/board/deleteBoard";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  open: boolean;
  handleOpen: () => void;
  boardId: string;
}

const DeleteBoardAlert = ({ open, handleOpen, boardId }: Props) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      handleOpen();
      const isDeleted = await deleteBoard(boardId);
      if (isDeleted) {
        toast.success("Board eliminado exitosamente!");
        router.push("/dashboard/boards");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        "Hubo un error al intentar borrar el board, por favor intenta nuevamente."
      );
    }
  };
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            board and tasks from our database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleOpen}>Cancel</AlertDialogCancel>
          <Button variant={"destructive"} onClick={handleDelete}>
            Continue
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export { DeleteBoardAlert };
