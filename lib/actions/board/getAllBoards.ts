import { prisma } from "@/prisma/prisma";

const getAllBoards = async () => {
  const data = await prisma.board.findMany({
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
};

export { getAllBoards };
