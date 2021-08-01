import { join } from 'path';

import { getTypeOrmConfig } from './config';

// Note: Config for migrations
export = {
  ...getTypeOrmConfig(),
  entities: [`${join(__dirname, '../')}**/*.entity.{ts,js}`],
  migrations: [`${join(__dirname, '../../../../../../')}apps/backend/api/migrations/**/*{.ts,.js}`],
  cli: {
    migrationsDir: `apps/backend/api/migrations`,
  },
};
