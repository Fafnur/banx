import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface Configuration<T extends TypeOrmModuleOptions = any> {
  port: number;
  prefix: string;
  typeOrm: T;
  cors: CorsOptions;
}

export const CONFIGURATION_DEFAULT: Configuration = {
  port: 3000,
  prefix: '',
  typeOrm: {
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'banx',
    password: '123456',
    database: 'banx',
    synchronize: false,
    autoLoadEntities: true,
  },
  cors: {
    origin: ['localhost:4200', 'localhost:4000'],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization', 'User-Agent', 'Enctype', 'Cache-Control'],
  },
};

export function configurationFactory(): Configuration {
  const ENV = process.env;

  return {
    port: ENV.PORT ? parseInt(ENV.PORT, 10) : CONFIGURATION_DEFAULT.port,
    prefix: ENV.PREFIX ?? CONFIGURATION_DEFAULT.prefix,
    typeOrm: {
      type: (ENV.DATABASE_TYPE as any) ?? CONFIGURATION_DEFAULT.typeOrm.type,
      host: ENV.DATABASE_HOST ?? CONFIGURATION_DEFAULT.typeOrm.host,
      port: ENV.DATABASE_PORT ? parseInt(ENV.DATABASE_PORT, 10) : CONFIGURATION_DEFAULT.typeOrm.port,
      username: ENV.DATABASE_USER ?? CONFIGURATION_DEFAULT.typeOrm.username,
      password: ENV.DATABASE_PASSWORD ?? CONFIGURATION_DEFAULT.typeOrm.password,
      database: ENV.DATABASE_NAME ?? CONFIGURATION_DEFAULT.typeOrm.database,
      synchronize: ENV.DATABASE_SYNCHRONIZE ? ENV.DATABASE_SYNCHRONIZE === 'true' : CONFIGURATION_DEFAULT.typeOrm.synchronize,
      autoLoadEntities: ENV.DATABASE_AUTO_LOAD_ENTITIES
        ? ENV.DATABASE_AUTO_LOAD_ENTITIES === 'true'
        : CONFIGURATION_DEFAULT.typeOrm.autoLoadEntities,
      entities: [`${__dirname}/**/*.entity.{ts,js}`],
    },
    cors: {
      origin: ENV.CORS_ORIGIN ?? CONFIGURATION_DEFAULT.cors.origin,
      credentials: ENV.CORS_CREDENTIALS ? process.env?.CORS_CREDENTIALS === 'true' : CONFIGURATION_DEFAULT.cors.credentials,
      allowedHeaders: ENV.CORS_ALLOWED_HEADERS ?? CONFIGURATION_DEFAULT.cors.allowedHeaders,
      methods: ENV.CORS_METHODS ?? CONFIGURATION_DEFAULT.cors.methods,
    },
  };
}

export async function typeOrmFactory(configService: ConfigService): Promise<TypeOrmModuleOptions> {
  return await configService.get<any>('typeOrm');
}
