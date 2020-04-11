import { Test, TestingModule } from '@nestjs/testing';
import { PartitionFileController } from './partition-file.controller';

describe('PartitionFile Controller', () => {
  let controller: PartitionFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartitionFileController],
    }).compile();

    controller = module.get<PartitionFileController>(PartitionFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
