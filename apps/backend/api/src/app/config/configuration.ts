import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface Configuration<T extends TypeOrmModuleOptions = any> {
  port: number;
  prefix: string;
  typeOrm: T;
}

export interface JwtOptions {
  secret: string;
  expiresIn: number;
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
};

export function configurationFactory(): Configuration {
  return {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : CONFIGURATION_DEFAULT.port,
    prefix: process.env.PREFIX ?? CONFIGURATION_DEFAULT.prefix,
    typeOrm: {
      type: (process.env.DATABASE_TYPE as any) ?? CONFIGURATION_DEFAULT.typeOrm.type,
      host: process.env.DATABASE_HOST ?? CONFIGURATION_DEFAULT.typeOrm.host,
      port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : CONFIGURATION_DEFAULT.typeOrm.port,
      username: process.env.DATABASE_USER ?? CONFIGURATION_DEFAULT.typeOrm.username,
      password: process.env.DATABASE_PASSWORD ?? CONFIGURATION_DEFAULT.typeOrm.password,
      database: process.env.DATABASE_NAME ?? CONFIGURATION_DEFAULT.typeOrm.database,
      synchronize: process.env?.DATABASE_SYNCHRONIZE
        ? process.env?.DATABASE_SYNCHRONIZE === 'true'
        : CONFIGURATION_DEFAULT.typeOrm.synchronize,
      autoLoadEntities: process.env?.DATABASE_AUTO_LOAD_ENTITIES
        ? process.env?.DATABASE_AUTO_LOAD_ENTITIES === 'true'
        : CONFIGURATION_DEFAULT.typeOrm.autoLoadEntities,
      entities: [`${__dirname}/**/*.entity.{ts,js}`],
    },
  };
}

export async function typeOrmFactory(configService: ConfigService): Promise<TypeOrmModuleOptions> {
  return await configService.get<any>('typeOrm');
}
