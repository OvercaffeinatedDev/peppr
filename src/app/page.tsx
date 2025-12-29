import { Card, CardBody, CardHeader } from '@heroui/react';
import { IconPackage } from '@tabler/icons-react';
import { sql } from 'drizzle-orm';

import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import db from '@/db';

export default async function Home() {
  const data = await db.execute(
    sql`SELECT * FROM pg_catalog.pg_tables LIMIT 5;`
  );

  return (
    <div>
      <ThemeSwitcher />
      <Card>
        <CardHeader title="Welcome to the Base App" />
        <CardBody>
          Hello World! <IconPackage />
          {JSON.stringify(data, null, 2)}
        </CardBody>
      </Card>
    </div>
  );
}
