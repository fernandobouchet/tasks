import { prisma } from "@/prisma/prisma";

const getAllBoards = async () => {
  const data = await prisma.board.findMany();
  return data;
};

export { getAllBoards };
