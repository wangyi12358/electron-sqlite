// import Database from "better-sqlite3";
// import { drizzle } from "drizzle-orm/better-sqlite3";
// import { migrate } from "drizzle-orm/better-sqlite3/migrator";

// const sqlite = new Database("sqlite.db");
// const db = drizzle(sqlite);

// // this will automatically run needed migrations on the database
// migrate(db, { migrationsFolder: "./drizzle" });

// commonJS
const Database = require('better-sqlite3');
const { drizzle } = require('drizzle-orm/better-sqlite3');
const { migrate } = require('drizzle-orm/better-sqlite3/migrator');

const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);

// this will automatically run needed migrations on the database
migrate(db, { migrationsFolder: './drizzle' });
