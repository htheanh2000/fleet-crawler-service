import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChototController } from './chotot.controller';
import { ChototService } from './chotot.service';
import { ChototProperty } from './entities/chototProperty.entity';

@Module({
    providers: [ChototService],
    exports: [ChototService],
    imports: [TypeOrmModule.forFeature([ChototProperty])], 
    controllers: [ChototController]
})
export class ChototModule {}
