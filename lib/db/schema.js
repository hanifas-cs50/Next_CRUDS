import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const post = sqliteTable("post", {
  id: integer("id").primaryKey(),
  post: text("post").notNull(),
  username: text("username").notNull(),
  createdAt: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});
