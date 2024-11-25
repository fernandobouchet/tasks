import { auth } from "@/lib/auth";
import { prisma } from "@/prisma/prisma";

const getAllBoards = async () => {
  const session = await auth();

  if (!session?.user) return null;

  const userId = session.user.id!;

  try {
    const data = await prisma.board.findMany({
      where: {
        userId: userId,
      },
      include: {
        tasks: {
          select: {
            taskId: true,
            status: true,
          },
        },
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllBoards };
