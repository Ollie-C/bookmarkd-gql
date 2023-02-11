import { PrismaClient } from "@prisma/client";
import { bookmarks } from "../data/testdata";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.create({
    data: { email: "fkrfjwoifweiofew@gmail.com", role: "ADMIN" },
  });

  await prisma.bookmark.createMany({ data: bookmarks });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
