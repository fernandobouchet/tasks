"use client";
import {
  MoreHorizontal,
  Trash2,
  SquareCheckBig,
  Edit,
  ChartLine,
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
import { usePathname } from "next/navigation";
import { isBoardRoute } from "@/lib/functions";

const projects = [
  {
    name: "Tasks",
    url: "#",
    icon: SquareCheckBig,
  },
  {
    name: "Statistics",
    url: "#",
    icon: ChartLine,
  },
];

const BoardMenu = () => {
  const path = usePathname();

  if (!isBoardRoute(path)) {
    return null;
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Board</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
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
              <DropdownMenuItem className="cursor-pointer">
                <Trash2 className="text-muted-foreground" />
                <span>Delete Board</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
};
export { BoardMenu };
