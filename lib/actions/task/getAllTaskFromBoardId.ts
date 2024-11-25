import { prisma } from "@/prisma/prisma";

const getAllTaskFromBoardId = async (boardId: string) => {
  try {
    const board = await prisma.board.findUnique({
      where: {
        boardId: boardId,
      },
    });

    if (!board) return null;

    const data = await prisma.task.findMany({
      where: {
        boardId,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllTaskFromBoardId };
