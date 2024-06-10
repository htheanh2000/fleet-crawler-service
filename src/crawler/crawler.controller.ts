import { Controller, Get, HttpCode, HttpStatus, Post, Query } from "@nestjs/common";
import { CrawlerService } from "./crawler.service";
import { chototCrawlDto } from "./dtos/crawlProperty";



@Controller('crawler')
export class CrawlerController {
    constructor(
        private readonly CrawlerService: CrawlerService
    ) {}

    @Get('/chotot')
    async get(@Query() query: chototCrawlDto) {
        const { page , limit } = query;
        this.CrawlerService.crawlChotot(page, limit);
        return HttpStatus.OK
    }

    @Post()
    async crawl() {
        return HttpStatus.OK
    }

} 