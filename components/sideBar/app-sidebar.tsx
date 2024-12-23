"use client";

import * as React from "react";
import { BookCheck, Home, LayoutDashboard } from "lucide-react";

import { NavMain } from "@/components/sideBar/nav-main";
import { NavUser } from "@/components/sideBar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";
import { BoardMenu } from "./boardMenu";
import { useTranslations } from "next-intl";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession();
  const t = useTranslations("appSideBar");

  const data = {
    navMain: [
      {
        title: t("home"),
        url: "/dashboard",
        icon: Home,
      },
      {
        title: t("boards"),
        url: "/dashboard/boards",
        icon: LayoutDashboard,
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton size="lg" asChild>
          <a href="/">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <BookCheck className="size-4" />
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">SimpleTaskBoard</span>
            </div>
          </a>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <BoardMenu />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={session?.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
