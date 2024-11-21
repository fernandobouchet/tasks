"use client";
import {
  MoreHorizontal,
  Trash2,
  SquareCheckBig,
  Edit,
  SquareKanban,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useParams, usePathname } from "next/navigation";
import { isBoardRoute } from "@/lib/functions";
import { DeleteBoardAlert } from "./board/deleteBoardAlert";
import { useState } from "react";
import Link from "next/link";

const BoardMenu = () => {
  const path = usePathname();
  const params = useParams();
  const [open, setOpen] = useState(false);

  const { boardId } = params;

  if (!isBoardRoute(path)) {
    return null;
  }

  const handleOpen = () => {
    setOpen(!open);
  };

  const projects = [
    {
      name: "Tasks",
      url: `/dashboard/boards/${boardId}`,
      icon: SquareCheckBig,
    },
    {
      name: "Kanban",
      url: `/dashboard/boards/${boardId}/kanban`,
      icon: SquareKanban,
    },
  ];

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Board</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <Link href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton className="text-sidebar-foreground/70">
                <MoreHorizontal className="text-sidebar-foreground/70" />
                <span>More</span>
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-48 rounded-lg"
              side={"bottom"}
              align={"end"}
            >
              <DropdownMenuItem className="cursor-pointer">
                <Edit className="text-muted-foreground" />
                <span>Edit Board</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onClick={handleOpen}>
                <Trash2 className="text-muted-foreground" />
                <span>Delete Board</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DeleteBoardAlert
            open={open}
            handleOpen={handleOpen}
            boardId={boardId as string}
          />
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
};
export { BoardMenu };
