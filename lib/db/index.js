import 'dotenv/config';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

const sqlite = new Database(process.env.DATABASE_URL);
const db = drizzle({ client: sqlite });

export { db };