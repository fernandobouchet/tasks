"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate } from "@/lib/functions";
import { Task, TaskColumn } from "@/types";
import { TaskOptions } from "../taskOptions";

export const columns: ColumnDef<TaskColumn>[] = [
  {
    accessorFn: (row) => row.title,
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      return <div className="line-clamp-1">{row.getValue("title")}</div>;
    },
    meta: { hideOnMobile: false },
  },
  {
    accessorFn: (row) => row.description,
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return <div className="line-clamp-1">{row.getValue("description")}</div>;
    },
    meta: { hideOnMobile: true },
  },
  {
    accessorFn: (row) => row.priority,
    accessorKey: "priority",
    header: "Priority",
    meta: { hideOnMobile: false },
  },
  {
    accessorFn: (row) => row.status,
    accessorKey: "status",
    header: "Status",
    meta: { hideOnMobile: false },
  },
  {
    accessorFn: (row) => row.createdAt,
    accessorKey: "createdAt",
    header: () => <div className="text-right">Created At</div>,
    cell: ({ row }) => {
      const formattedDueDate = formatDate(row.getValue("createdAt"));
      return (
        <div className="text-right font-medium truncate">
          {formattedDueDate}
        </div>
      );
    },
    meta: { hideOnMobile: true },
  },
  {
    accessorFn: (row) => row.dueDate,
    accessorKey: "dueDate",
    header: () => <div className="text-right">Due Date</div>,
    cell: ({ row }) => {
      const formattedDueDate = formatDate(row.getValue("dueDate"));
      return (
        <div className="text-right font-medium truncate">
          {formattedDueDate}
        </div>
      );
    },
    meta: { hideOnMobile: true },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const task = row.original as Task;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <TaskOptions task={task} />
        </DropdownMenu>
      );
    },
  },
];
