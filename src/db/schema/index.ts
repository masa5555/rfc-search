import {timestamp, mysqlTable, serial, varchar} from 'drizzle-orm/mysql-core';

export const healthCheckTable = mysqlTable('health_check', {
  id: serial('id').primaryKey(),
  description: varchar('description', {length: 255}),
  createdAt: timestamp('created_at').defaultNow(),
});
