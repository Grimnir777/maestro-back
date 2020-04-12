import { Injectable } from '@nestjs/common';
import { MinioService } from 'nestjs-minio-client';
import { v4 as uuidv4 } from 'uuid';
import { ConfigService } from '@nestjs/config';

var Minio = require('minio')



@Injectable()
export class PartitionFileService {

  constructor(private readonly minioClient: MinioService) {}

  public async checkBucket(bucketName: string) {
    const bucket = await this.minioClient.client.bucketExists(bucketName);
    if(!bucket) {
      const createBucket = await this.minioClient.client.makeBucket(bucketName, 'us-east-1');
      if(createBucket) {
        console.log('Bucket created successfully');
      }
    } else {
      console.log('Bucket already exists');
    }
  }

  async listAllBuckets() {
    return this.minioClient.client.listBuckets();
  }

  async createObject(bucket: string, file ): Promise<object> {
    try {
      // if needed file.originalname
      const uuid = uuidv4();
      await this.minioClient.client.putObject(bucket, uuid, file.buffer);
      const url = await this.getObjectUrl(bucket, uuid);
      return {
        id: uuid,
        url: url.url
      };
    } catch (error) {
      console.log(error);
      return null;
    }

  }

  async getObjectUrl(bucket: string, fileName: string): Promise<any> {
    // return await this.minioClient.client.presignedUrl('GET', bucket, fileName, 24*60*60);
    const url = await this.minioClient.client.presignedGetObject(bucket, fileName, 24*60*60);
    return {url};
  }

  async deleteObject(bucket: string, fileName: string) {
    return await this.minioClient.client.removeObject(bucket, fileName);
  }

}
