import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawlerController } from './crawler/crawler.controller';
import { CrawlerService } from './crawler/crawler.service';
import { ChototController } from './chotot/chotot.controller';
import { ChototService } from './chotot/chotot.service';
import { ChototProperty } from './chotot/entities/chototProperty.entity'; // Adjust path as necessary
import { CrawlerModule } from './crawler/crawler.module';
import { ChototModule } from './chotot/chotot.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres', // or any other database type
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1',
      database: 'fleet',
      entities: [ChototProperty],
      synchronize: true, // Set to false in production
    }),
    CrawlerModule,
    ChototModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
