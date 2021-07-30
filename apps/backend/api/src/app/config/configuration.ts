import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export interface Configuration {
  port: number;
  prefix: string;
  typeOrm: TypeOrmModuleOptions;
}

export function configurationFactory(): Configuration {
  return {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
    prefix: process.env.PREFIX ?? '',
    typeOrm: {
      type: (process.env.DATABASE_TYPE as any) ?? 'mariadb',
      host: process.env.DATABASE_HOST ?? 'localhost',
      port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : 3306,
      username: process.env.DATABASE_USER ?? 'banx',
      password: process.env.DATABASE_PASSWORD ?? '123456',
      database: process.env.DATABASE_NAME ?? 'banx',
      synchronize: process.env?.DATABASE_SYNCHRONIZE ? process.env?.DATABASE_SYNCHRONIZE === 'true' : false,
      autoLoadEntities: process.env?.DATABASE_AUTO_LOAD_ENTITIES ? process.env?.DATABASE_AUTO_LOAD_ENTITIES === 'true' : true,
      entities: [`${join(__dirname, '../../../../')}libs/**/*.entity.{ts,js}`, `$${__dirname}src/**/*.entity.{ts,js}`],
    },
  };
}

export async function typeOrmFactory(configService: ConfigService): Promise<TypeOrmModuleOptions> {
  return await configService.get<any>('typeOrm');
}
