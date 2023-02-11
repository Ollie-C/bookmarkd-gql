/* Instatiates prisma client one time for use across entire project */
import { PrismaClient } from "@prisma/client";

//Saves on global object as running next dev clears cache which creates new db connection each hot reload, exhausting the db
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

//* check here https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
