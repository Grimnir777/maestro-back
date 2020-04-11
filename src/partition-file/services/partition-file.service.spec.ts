import { Test, TestingModule } from '@nestjs/testing';
import { PartitionFileService } from './partition-file.service';

describe('PartitionFileService', () => {
  let service: PartitionFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartitionFileService],
    }).compile();

    service = module.get<PartitionFileService>(PartitionFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
