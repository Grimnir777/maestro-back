import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PartitionFileService } from './services/partition-file.service';

@Controller('partition-file')
export class PartitionFileController {
  constructor(private partitionFileService: PartitionFileService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file) {
      return this.partitionFileService.createObject('partitions', file)
    }
    // get Doc
    // post Doc => return url
    // delete Doc
    // put Doc
}
