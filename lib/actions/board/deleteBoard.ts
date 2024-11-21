"use server";

import { prisma } from "@/prisma/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

const deleteBoard = async (boardId: string) => {
  const session = await auth();

  if (!session?.user) return null;

  const userId = session.user.id!;

  try {
    await prisma.board.delete({
      where: {
        boardId: boardId,
        userId: userId,
      },
    });

    revalidatePath("/(pages)/dashboard");

    return true;
  } catch (error) {
    console.error("Error al eliminar el board:", error);
    return null;
  }
};

export { deleteBoard };
