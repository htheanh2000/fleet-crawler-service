import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChototProperty } from './entities/chototProperty.entity';

@Injectable()
export class ChototService {
    constructor (
        @InjectRepository(ChototProperty) 
        private chototRepository: Repository<ChototProperty>,
    ) {}

    async createListing(chototProperty: ChototProperty) : Promise<ChototProperty> {
        const chotot = this.chototRepository.create(chototProperty);
        await this.chototRepository.save(chotot) ;
        return chotot
    }
    
    async findOrCreateListing(chototProperty: ChototProperty): Promise<ChototProperty> {
        let chotot = await this.chototRepository.findOne({where: {list_id: chototProperty.list_id}}) ;
        if(!chotot) {
            chotot = this.chototRepository.create(chototProperty)
            await this.chototRepository.save(chotot);
        } 
        return chotot
    }
}
