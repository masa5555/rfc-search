import type {Config} from 'drizzle-kit';
import { configDotenv } from 'dotenv';
const result = configDotenv( {path: "./.env.local"})

export default {
  schema: './src/db/schema/index.ts',
  out: './src/db/migrations',
  dbCredentials: {
    uri: result.parsed?.DATABASE_URL ?? "",
  },
  driver: 'mysql2',
} satisfies Config;
