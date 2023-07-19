import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const artist = pgTable("Artist", {
  ArtistId: integer("ArtistId").primaryKey(),
  Name: text("Name"),
});

export const artistRelations = relations(artist, ({ many }) => ({
  Album: many(album),
}));

export const album = pgTable("Album", {
  AlbumId: integer("AlbumId").primaryKey(),
  ArtistId: integer("ArtistId"),
  Title: text("Title"),
});

export const albumRelations = relations(album, ({ one, many }) => ({
  Artist: one(artist, {
    fields: [album.AlbumId],
    references: [artist.ArtistId],
  }),
  Track: many(track),
}));

export const track = pgTable("Track", {
  TrackId: integer("TrackId").primaryKey(),
  AlbumId: integer("AlbumId"),
  Name: text("Name"),
  Composer: text("Composer"),
  Milliseconds: integer("Milliseconds"),
  Bytes: integer("Bytes"),
  UnitPrice: integer("UnitPrice"),
});

export const trackRelations = relations(track, ({ one }) => ({
  Album: one(album, {
    fields: [track.AlbumId],
    references: [album.AlbumId],
  }),
}));
