"use server";

import { prisma } from "@/prisma/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";

interface Props {
  title: string;
  shortName: string;
}

const createBoard = async ({ title, shortName }: Props) => {
  const session = await auth();

  if (!session?.user) return null;

  const userId = session.user.id!;

  try {
    const board = await prisma.board.create({
      data: {
        title,
        shortName,
        userId,
      },
    });

    revalidatePath("/(pages)/dashboard");

    return board;
  } catch (error) {
    console.error("Error al crear el board:", error);
  }
};

export { createBoard };
