//GraphQL server with GraphQL Yoga

import { createYoga } from "graphql-yoga";
import type { NextApiRequest, NextApiResponse } from "next";

//Replace resolvers and typedefs with Pothos graphql schema
import { schema } from "../../graphql/schema";

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema,
  graphqlEndpoint: "/api/graphql",
});

export const config = {
  api: {
    bodyParser: false,
  },
};
