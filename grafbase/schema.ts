import { relations } from "drizzle-orm";
import { int, mysqlTable, serial, text, varchar } from "drizzle-orm/mysql-core";

export const artist = mysqlTable("Artist", {
  ArtistId: int("ArtistId").primaryKey(),
  Name: text("Name"),
});

export const artistRelations = relations(artist, ({ many }) => ({
  Album: many(album),
}));

export const album = mysqlTable("Album", {
  AlbumId: int("AlbumId").primaryKey(),
  ArtistId: int("ArtistId"),
  Title: text("Title"),
});

export const albumRelations = relations(album, ({ one, many }) => ({
  Artist: one(artist, {
    fields: [album.AlbumId],
    references: [artist.ArtistId],
  }),
  Track: many(track),
}));

export const track = mysqlTable("Track", {
  TrackId: int("TrackId").primaryKey(),
  AlbumId: int("AlbumId"),
  Name: text("Name"),
  Composer: text("Composer"),
  Milliseconds: int("Milliseconds"),
  Bytes: int("Bytes"),
  UnitPrice: int("UnitPrice"),
});

export const trackRelations = relations(track, ({ one }) => ({
  Album: one(album, {
    fields: [track.AlbumId],
    references: [album.AlbumId],
  }),
}));
