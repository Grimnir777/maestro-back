import { Module } from '@nestjs/common';
import { PartitionFileController } from './partition-file.controller';
import { PartitionFileService } from './services/partition-file.service';
import { MinioModule } from 'nestjs-minio-client';

@Module({
  controllers: [PartitionFileController],
  providers: [PartitionFileService],
  imports: [
    MinioModule.register({
      endPoint: '127.0.0.1',
      port: 9000,
      useSSL: false,
      accessKey: 'AKIA',
      secretKey: 'AKIA12'
    })
  ]
})
export class PartitionFileModule {}
