import { builder } from "../builder";
import { prisma } from "lib/prisma";

//Creating object types using Pothos' prismaObject(name, options)
builder.prismaObject("Bookmark", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    url: t.exposeString("url"),
    category: t.exposeString("category"),
  }),
});

//Bookmarks query type. Pothos will use Bookmark field to resolve. Resolve: contains the logic used for the query
//Query arg adds "select" or "include" to query
builder.queryField("bookmarks", (t) =>
  t.prismaField({
    type: ["Bookmark"],
    resolve: (query, _parent, _args, _ctx, _info) =>
      prisma.bookmark.findMany({ ...query }),
  })
);
