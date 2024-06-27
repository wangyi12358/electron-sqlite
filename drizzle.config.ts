import type { Config } from "drizzle-kit";

export default {
  schema: "./src/api/schema.ts",
  out: "./drizzle",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./sqlite.db",
  },
} as Config;
