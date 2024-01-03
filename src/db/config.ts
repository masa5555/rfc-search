import {drizzle} from 'drizzle-orm/planetscale-serverless';
import {connect} from '@planetscale/database';
import {configDotenv} from 'dotenv';
import * as schema from './schema/index.ts';

const result = configDotenv({path: './.env.local'});

// Create the connection
const connection = connect({
  ...result.parsed,
});

export const db = drizzle(connection, {schema});
