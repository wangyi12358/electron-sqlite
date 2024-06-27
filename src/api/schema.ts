import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: integer("id").primaryKey(),
  name: text("full_name"),
  createAt: integer("create_at", { mode: "timestamp" }).default(
    sql`(datetime('now','localtime'))`,
  ),
  updateAt: integer("update_at", { mode: "timestamp" }),
});

export type User = typeof user.$inferSelect;
export type NewUser = typeof user.$inferInsert;
