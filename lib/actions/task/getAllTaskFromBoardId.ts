import { prisma } from "@/prisma/prisma";

const getAllTaskFromBoardId = async (boardId: string) => {
  const data = await prisma.task.findMany({
    where: {
      boardId,
    },
  });
  return data;
};

export { getAllTaskFromBoardId };
