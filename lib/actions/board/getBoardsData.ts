"use server";
import { prisma } from "@/prisma/prisma";
import { auth } from "@/lib/auth";

const getBoardsData = async () => {
  const session = await auth();

  if (!session?.user) return null;

  const userId = session.user.id!;

  const data = await prisma.board.findMany({
    where: {
      userId: userId,
    },
    include: {
      tasks: {
        select: {
          status: true,
        },
      },
    },
  });
  return data;
};

export { getBoardsData };
