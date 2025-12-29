import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

const events = pgTable('user', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 320 }).notNull(),
});

export default events;
