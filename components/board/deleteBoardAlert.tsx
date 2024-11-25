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
import { useTranslations } from "next-intl";

interface Props {
  open: boolean;
  handleOpen: () => void;
  boardId: string;
}

const DeleteBoardAlert = ({ open, handleOpen, boardId }: Props) => {
  const t = useTranslations("board.deleteAlert");
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
          <AlertDialogTitle>{t("title")}</AlertDialogTitle>
          <AlertDialogDescription>{t("description")}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleOpen}>
            {t("cancelButton")}
          </AlertDialogCancel>
          <Button variant={"destructive"} onClick={handleDelete}>
            {t("deleteButton")}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export { DeleteBoardAlert };
