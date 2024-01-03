import {
  timestamp,
  mysqlTable,
  serial,
  varchar,
  year,
  tinyint,
  smallint,
} from 'drizzle-orm/mysql-core';

export const healthCheckTable = mysqlTable('health_check', {
  id: serial('id').primaryKey(),
  description: varchar('description', {length: 255}),
  createdAt: timestamp('created_at').defaultNow(),
});

export const rfcTable = mysqlTable('rfc', {
  id: serial('id').primaryKey(), // SERIAL is an alias for BIGINT UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE.
  docId: varchar('doc_id', {length: 10}).notNull().unique(), // RFC0000
  title: varchar('title', {length: 255}).notNull(),
  draft: varchar('draft', {length: 100}),
  source: varchar('source', {length: 100}).notNull(),
  status: varchar('status', {length: 39}).notNull(),
  pageCount: smallint('page_count'),
  pubStatus: varchar('pub_status', {length: 30}).notNull(),
  pubYear: year('pub_year'),
  pubMonth: tinyint('pub_month'), // 1 ~ 12
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
