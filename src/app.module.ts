import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configService from './common/config/config.service';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log(configService.getTypeOrmConfig());
  }
}
