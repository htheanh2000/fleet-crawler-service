import { IsNumber, Max, Min } from "class-validator";


export class chototCrawlDto {
    @IsNumber()
    @Max(10)
    @Min(1)
    page: number

    @IsNumber()
    @Max(10)
    @Min(1)
    limit: number
}