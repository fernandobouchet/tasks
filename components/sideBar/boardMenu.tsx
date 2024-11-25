"use client";
import { SquareCheckBig, SquareKanban } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useParams, usePathname } from "next/navigation";
import { isBoardRoute } from "@/lib/functions";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const BoardMenu = () => {
  const path = usePathname();
  const params = useParams();
  const t = useTranslations("boardMenu");

  const { boardId } = params;

  if (!isBoardRoute(path)) {
    return null;
  }

  const projects = [
    {
      name: t("task"),
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
      <SidebarGroupLabel>{t("board")}</SidebarGroupLabel>
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
      </SidebarMenu>
    </SidebarGroup>
  );
};
export { BoardMenu };
