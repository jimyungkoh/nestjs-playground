import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

class ConfigService {
  /**
   * 타입스크립트 인덱스 서명(index signature)에 대하여
   * https://radlohead.gitbook.io/typescript-deep-dive/type-system/index-signatures
   */
  constructor(private readonly env: { [key: string]: string | undefined }) {}

  get(key: string): string {
    return this.env[key];
  }

  getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.get('DB_HOST'),
      port: parseInt(this.get('DB_PORT')),
      username: this.get('DB_USERNAME'),
      password: this.get('DB_PASSWORD'),
      database: this.get('DB_NAME'),
      entities: [__dirname + '/../../**/**/*.entity{.ts,.js}'],
      synchronize: true,
    };
  }
}

const configService = new ConfigService(process.env);

export default configService;
