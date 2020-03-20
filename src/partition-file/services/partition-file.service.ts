import { Injectable } from '@nestjs/common';
import { MinioService } from 'nestjs-minio-client';

@Injectable()
export class PartitionFileService {

  constructor(private readonly minioClient: MinioService) {}

  async listAllBuckets() {
    return this.minioClient.client.listBuckets();
  }

  async createObject(bucket: string, file ) {
    console.log(file)
    this.minioClient.client.putObject(bucket, file.originalname, file.buffer, function(err, etag) {
      if (err) {
        console.log(err);
        return null;
      }
      return etag;
    });

  }

  async getObjectUrl(bucket: string, fileName: string) {
    this.minioClient.client.presignedUrl('GET', bucket, fileName, 24*60*60, function(err, presignedUrl) {
      if (err) {
        console.log(err);
        return null;
      }
      return presignedUrl;
    });
  }




}
