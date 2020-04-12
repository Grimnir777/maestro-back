import { Controller, Post, UploadedFile, UseInterceptors, Delete, Param, Get, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PartitionFileService } from './services/partition-file.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiTags, ApiConsumes, ApiOperation, ApiCreatedResponse, ApiBadRequestResponse, ApiParam, ApiOkResponse, ApiUnauthorizedResponse, ApiBearerAuth, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiTags('Partition-file')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('partition-file')
export class PartitionFileController {
  private bucketName: string = 'partitions';
  constructor(private partitionFileService: PartitionFileService) {
    this.partitionFileService.checkBucket(this.bucketName);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Upload a partition file' })
  @ApiConsumes('multipart/form-data')
  @ApiCreatedResponse({description: 'Return the file id and url'})
  @ApiBadRequestResponse({description: 'Impossible to upload the file'})
  async uploadFile(@UploadedFile() file) {
    return await this.partitionFileService.createObject(this.bucketName, file);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Delete a partition file'})
  @ApiParam({name: 'id', example:'123456789'})
  @ApiOkResponse({description: 'Return a boolean to confirm the deletion',type: Boolean})
  @ApiBadRequestResponse({description: 'Impossible to delete the partition file'})
  @ApiUnauthorizedResponse({description:'Error with your credentials, have you authenticated yourself ?'})
  async remove(@Param('id') id: string) {
    return await this.partitionFileService.deleteObject(this.bucketName, id);
  }

  @Get(':id')
  @ApiOperation({summary: 'Get a partition file url'})
  @ApiParam({name: 'id', example:'123456789'})
  @ApiOkResponse({description: 'Return the partition file url', type: String})
  @ApiNotFoundResponse({description: 'Impossible to retrieve the partition file'})
  async getPartitionFileUrlById(@Param('id') id: string){
    return await this.partitionFileService.getObjectUrl(this.bucketName, id);
  }
}
