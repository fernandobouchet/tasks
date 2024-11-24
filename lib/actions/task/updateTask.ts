"use server";

import { prisma } from "@/prisma/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { TaskPriority, TaskStatus } from "@/types";

interface Props {
  task: {
    taskId: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate: Date | null;
    boardId: string;
  };
}

const updateTask = async ({ task }: Props) => {
  const session = await auth();

  if (!session?.user) return null;

  const board = await prisma.board.findUnique({
    where: {
      boardId: task.boardId,
      userId: session.user.id,
    },
  });

  if (!board) return null;

  try {
    const newTask = await prisma.task.update({
      where: {
        taskId: task.taskId,
      },
      data: { ...task },
    });

    revalidatePath(`/(pages)/dashboard/boards/${task.boardId}`, "page");

    return newTask;
  } catch (error) {
    console.error("Error al crear el board:", error);
  }
};
export { updateTask };
