"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { BoardForm } from "./boardForm";
import { SidebarMenuButton } from "../ui/sidebar";
import { useState } from "react";
import { useTranslations } from "next-intl";

const BoardFormDialog = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("newBoardDialog");

  const handleOpenChange = () => {
    setOpen(!open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <SidebarMenuButton>
          <Plus />
          {t("button")}
        </SidebarMenuButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> {t("title")}</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <BoardForm onOpenChange={handleOpenChange} />
      </DialogContent>
    </Dialog>
  );
};
export { BoardFormDialog };
