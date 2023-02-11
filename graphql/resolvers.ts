import { prisma } from "lib/prisma";

export const resolvers = {
  Query: {
    bookmarks: () => {
      return prisma.bookmark.findMany();
    },
  },
};
