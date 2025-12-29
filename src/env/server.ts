import { createEnv } from '@t3-oss/env-nextjs';
import { config } from 'dotenv';
import { expand } from 'dotenv-expand';
import { z } from 'zod';

expand(config());

export const env = createEnv({
  server: {
    DB_MIGRATING: z
      .string()
      .refine((s) => s === 'true' || s === 'false')
      .transform((s) => s === 'true')
      .optional(),
    DATABASE_HOST: z.string(),
    DATABASE_USER: z.string(),
    DATABASE_PASSWORD: z.string(),
    DATABASE_NAME: z.string(),
    DATABASE_PORT: z.coerce.number().default(5432),
    DATABASE_URL: z.url(),
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
  },
  onValidationError: (issues) => {
    console.error('❌ Invalid environment variables:', issues);
    process.exit(1);
  },
  emptyStringAsUndefined: true,
  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env,
});
