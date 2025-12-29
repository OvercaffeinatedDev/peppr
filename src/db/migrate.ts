import { migrate } from 'drizzle-orm/postgres-js/migrator';

import config from '@/../drizzle.config';
import { env } from '@/env/server';

import db, { client } from './index';

if (!env.DB_MIGRATING) {
  throw new Error(
    'DB_MIGRATING environment variable is not set to true. Migration aborted.'
  );
}

await migrate(db, { migrationsFolder: config.out! });
await client.end();
