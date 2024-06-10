import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios from 'axios';
import { ChototService } from 'src/chotot/chotot.service';
import { ChototProperty } from 'src/chotot/entities/chototProperty.entity';

@Injectable()
export class CrawlerService {
    private readonly logger = new Logger(CrawlerService.name);
    private currentPage = 100;
    private readonly maxPage = 1000; // Assuming 6 is the maximum page number

    constructor(
        private chototService: ChototService,
    ) {}

    @Cron(CronExpression.EVERY_5_SECONDS)
    async handleCron() {
        this.logger.debug(`Crawling page ${this.currentPage}`);
        if(this.currentPage > this.maxPage) return ;

        try {
        await this.crawlChotot(this.currentPage, 10) ;
        this.logger.log(`Successfully crawled page ${this.currentPage}`);
        // Increment the page or reset to 1 if the max page is reached
        this.currentPage += 1
        } catch (error) {
        this.logger.error(`Error crawling page ${this.currentPage}:`, error.message);
        }
    }

    async crawlChotot(page: number, limit: number) {
        const API = 'https://gateway.chotot.com/v1'
        const region_v2 = '13000'
        const category = '1010'
        const URL = `${API}/public/ad-listing?region_v2=${region_v2}&cg=${category}&o=${(page-1) * limit}&page=${page}&st=u,h&limit=${limit}&w=1&key_param_included=true`
        
        try {
            const apiResponse = await axios.get(URL);
            const ads: ChototProperty[] = apiResponse.data.ads;
            for (const item of ads) {
                try {
                    this.chototService.findOrCreateListing(item);
                } catch (error) {
                    console.log('Failed with:', error );
                }
            }
        } catch (error) {
            console.error('Error fetching ads:', error);
        }
    }

}
