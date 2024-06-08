import { Test, TestingModule } from '@nestjs/testing';
import { ChototService } from './chotot.service';

describe('ChototService', () => {
  let service: ChototService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChototService],
    }).compile();

    service = module.get<ChototService>(ChototService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
