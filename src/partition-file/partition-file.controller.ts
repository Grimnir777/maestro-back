import { Controller, Post, UploadedFile, UseInterceptors, Delete, Param, Get, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PartitionFileService } from './services/partition-file.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('partition-file')
export class PartitionFileController {
  private bucketName: string = 'partitions';
  constructor(private partitionFileService: PartitionFileService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    return await this.partitionFileService.createObject(this.bucketName, file);
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string
  ) {
    return await this.partitionFileService.deleteObject(this.bucketName, id);
  }

  @Get(':id')
  async getPartitionFileUrlById(@Param('id') id: string){
    return await this.partitionFileService.getObjectUrl(this.bucketName, id);
  }

  @Get(':id/download')
  async getPartitionFileById(@Param('id') id: string){
    const r = await this.partitionFileService.getObject(this.bucketName, id);
    console.log(r);
    return r;
    // console.log(buffer);
    // return buffer;
    // res.set({
    //   'Content-Type': 'application/pdf',
    //   'Content-Length': buffer.length,
    // });
  
    // stream.pipe(res);
    // return res.sendfile()
    // return await this.partitionFileService.getObject(this.bucketName, id);
  }
}
