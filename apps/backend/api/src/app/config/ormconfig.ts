import { join } from 'path';

// Note: Config for migrations
export = {
  type: (process.env.DATABASE_TYPE as any) ?? 'mariadb',
  host: process.env.DATABASE_HOST ?? 'localhost',
  port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : 3306,
  username: process.env.DATABASE_USER ?? 'banx',
  password: process.env.DATABASE_PASSWORD ?? '123456',
  database: process.env.DATABASE_NAME ?? 'banx',
  synchronize: process.env?.DATABASE_SYNCHRONIZE ? process.env?.DATABASE_SYNCHRONIZE === 'true' : false,
  autoLoadEntities: process.env?.DATABASE_AUTO_LOAD_ENTITIES ? process.env?.DATABASE_AUTO_LOAD_ENTITIES === 'true' : true,
  entities: [`${join(__dirname, '../')}**/*.entity.{ts,js}`],
  migrations: [`${join(__dirname, '../../../../../../')}apps/backend/api/migrations/**/*{.ts,.js}`],
  cli: {
    migrationsDir: `apps/backend/api/migrations`,
  },
};
