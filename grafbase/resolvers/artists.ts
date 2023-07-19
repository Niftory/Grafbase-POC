import { client } from "../client";

export default async function artists(ctx, arg, what, info) {
  return client.query.artist.findMany({
    with: { Album: { with: { Track: true } } },
  });
}
