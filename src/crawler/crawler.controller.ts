import { Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CrawlerService } from "./crawler.service";



@Controller('crawler')
export class CrawlerController {
    constructor(
        private readonly CrawlerService: CrawlerService
    ) {}

    @Get()
    async get() {
        return HttpStatus.OK
    }

    @Post()
    async crawl() {
        return HttpStatus.OK
    }

} 