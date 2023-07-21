import { client, conn } from "../client";
import { GraphQLError } from "graphql";
import { config } from "../lib";
import { connect } from "@planetscale/database";

export default async function artists(ctx, arg, what, info) {
  try {
    return client.query.artist.findMany();
  } catch (e) {
    throw new GraphQLError(e);
  }
}
