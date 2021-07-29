export interface Configuration {
  port: number;
  prefix: string;
  database: {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
  };
}

export function configurationFactory(): Configuration {
  return {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
    prefix: process.env.PREFIX ?? '',
    database: {
      type: process.env.DATABASE_TYPE ?? 'mariadb',
      host: process.env.DATABASE_HOST ?? 'localhost',
      port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : 3306,
      username: process.env.DATABASE_USER ?? 'banx',
      password: process.env.DATABASE_PASSWORD ?? '123456',
      database: process.env.DATABASE_NAME ?? 'banx',
      synchronize: !!process.env.DATABASE_SYNCHRONIZE ?? false,
    },
  };
}
