import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { NewBoardForm } from "./newBoardForm";
import { SidebarMenuButton } from "../ui/sidebar";
import { useState } from "react";

const BoardFormDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = () => {
    setOpen(!open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <SidebarMenuButton>
          <Plus />
          New board
        </SidebarMenuButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new board</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <NewBoardForm onOpenChange={handleOpenChange} />
      </DialogContent>
    </Dialog>
  );
};
export { BoardFormDialog };
