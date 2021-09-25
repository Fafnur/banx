import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface Config<T extends TypeOrmModuleOptions = any> {
  port: number;
  prefix: string;
  typeOrm: T;
  cors: CorsOptions;
}

export function getTypeOrmConfig(): TypeOrmModuleOptions {
  return {
    type: (process.env.DATABASE_TYPE as any) ?? 'mariadb',
    host: process.env.DATABASE_HOST ?? 'localhost',
    port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : 3306,
    username: process.env.DATABASE_USER ?? 'banx',
    password: process.env.DATABASE_PASSWORD ?? '123456',
    database: process.env.DATABASE_NAME ?? 'banx',
    synchronize: process.env.DATABASE_SYNCHRONIZE ? process.env.DATABASE_SYNCHRONIZE === 'true' : true,
    autoLoadEntities: process.env.DATABASE_AUTO_LOAD_ENTITIES ? process.env.DATABASE_AUTO_LOAD_ENTITIES === 'true' : true,
    entities: [`${__dirname}/**/*.entity.{ts,js}`],
  };
}

export function getCorsConfig(): CorsOptions {
  return {
    origin: process.env.CORS_ORIGIN ?? ['http://localhost:4200', 'http://localhost:4000'],
    credentials: process.env.CORS_CREDENTIALS ? process.env?.CORS_CREDENTIALS === 'true' : true,
    allowedHeaders: process.env.CORS_ALLOWED_HEADERS ?? ['Content-Type', 'Authorization', 'User-Agent', 'Enctype', 'Cache-Control'],
    methods: process.env.CORS_METHODS ?? 'GET,HEAD,PUT,PATCH,POST,DELETE',
  };
}

export function configurationFactory(): Config {
  return {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
    prefix: process.env.PREFIX ?? '',
    typeOrm: getTypeOrmConfig(),
    cors: getCorsConfig(),
  };
}

export async function typeOrmFactory(configService: ConfigService): Promise<TypeOrmModuleOptions> {
  return await configService.get<any>('typeOrm');
}
