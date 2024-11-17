"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate } from "@/lib/functions";

export const columns: ColumnDef<TaskColumn>[] = [
  {
    accessorFn: (row) => row.title,
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorFn: (row) => row.description,
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorFn: (row) => row.priority,
    accessorKey: "priority",
    header: "Priority",
  },
  {
    accessorFn: (row) => row.status,
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorFn: (row) => row.createdAt,
    accessorKey: "createdAt",
    header: () => <div className="text-right">Created At</div>,
    cell: ({ row }) => {
      const formattedDueDate = formatDate(row.getValue("createdAt"));
      return <div className="text-right font-medium">{formattedDueDate}</div>;
    },
  },
  {
    accessorFn: (row) => row.dueDate,
    accessorKey: "dueDate",
    header: () => <div className="text-right">Due Date</div>,
    cell: ({ row }) => {
      const formattedDueDate = formatDate(row.getValue("dueDate"));
      return <div className="text-right font-medium">{formattedDueDate}</div>;
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit task</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete task</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
