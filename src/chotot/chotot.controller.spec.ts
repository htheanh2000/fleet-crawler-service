import { Test, TestingModule } from '@nestjs/testing';
import { ChototController } from './chotot.controller';

describe('ChototController', () => {
  let controller: ChototController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChototController],
    }).compile();

    controller = module.get<ChototController>(ChototController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
