//GraphQL Schema - API schema
import { builder } from "./builder";

//Import types
import "./types/User";
import "./types/Bookmark";

export const schema = builder.toSchema();
