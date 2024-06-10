import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChototModule } from 'src/chotot/chotot.module';
import { ChototService } from 'src/chotot/chotot.service';
import { ChototProperty } from 'src/chotot/entities/chototProperty.entity';
import { CrawlerController } from './crawler.controller';
import { CrawlerService } from './crawler.service';

@Module({
    providers: [CrawlerService],
    imports: [ChototModule,TypeOrmModule.forFeature([ChototProperty])], 
    controllers: [CrawlerController]
  })
export class CrawlerModule {}
