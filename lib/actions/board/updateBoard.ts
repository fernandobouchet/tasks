"use server";

import { prisma } from "@/prisma/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

const updateBoard = async (boardId: string, title: string) => {
  const session = await auth();

  if (!session?.user) return null;

  const userId = session.user.id!;

  try {
    const updatedBoard = await prisma.board.update({
      where: {
        boardId: boardId,
        userId: userId,
      },
      data: {
        title: title,
      },
    });

    revalidatePath("/(pages)/dashboard/boards");

    return updatedBoard;
  } catch (error) {
    console.error("Error al actualizar el board:", error);
    return null;
  }
};

export { updateBoard };
