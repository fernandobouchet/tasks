"use server";

import { prisma } from "@/prisma/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { Task } from "@/types";

const deleteTask = async (task: Task) => {
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
    const deletedTask = await prisma.task.delete({
      where: {
        taskId: task.taskId,
      },
    });

    revalidatePath(`/(pages)/dashboard/boards/${task.boardId}`, "page");

    return deletedTask.taskId;
  } catch (error) {
    console.error("Error al crear el board:", error);
  }
};
export { deleteTask };
