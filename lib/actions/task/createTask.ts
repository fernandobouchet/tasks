"use server";

import { prisma } from "@/prisma/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { TaskPriority, TaskStatus } from "@/types";

interface Props {
  task: {
    title: string;
    description: string;
    status: keyof typeof TaskStatus;
    priority: keyof typeof TaskPriority;
    dueDate: Date;
  };
  boardId: string;
}

const createTask = async ({ task, boardId }: Props) => {
  const session = await auth();

  if (!session?.user) return null;

  const board = await prisma.board.findUnique({
    where: {
      boardId: boardId,
      userId: session.user.id,
    },
  });

  if (!board) return null;

  try {
    const newTask = await prisma.task.create({
      data: { ...task, boardId },
    });

    revalidatePath(`/(pages)/dashboard/boards/${boardId}`, "layout");

    return newTask;
  } catch (error) {
    console.error("Error al crear el board:", error);
  }
};

export { createTask };
