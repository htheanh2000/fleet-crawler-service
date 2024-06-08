import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawlerController } from './crawler/crawler.controller';
import { CrawlerService } from './crawler/crawler.service';
import { ChototController } from './chotot/chotot.controller';
import { ChototService } from './chotot/chotot.service';

@Module({
  imports: [],
  controllers: [AppController, CrawlerController, ChototController],
  providers: [AppService, CrawlerService, ChototService],
})
export class AppModule {}
