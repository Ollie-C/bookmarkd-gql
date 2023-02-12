//GraphQL Schema Builder with Pothos

import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import { prisma } from "../lib/prisma";

/*
Create new SchemaBuilder Instance
Define static types used to create GraphQL schema
Options: plugins + prisma client instance
*/
export const builder = new SchemaBuilder<{ PrismaTypes: PrismaTypes }>({
  plugins: [PrismaPlugin],
  prisma: { client: prisma },
});

builder.queryType({});
