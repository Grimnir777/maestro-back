import { Injectable } from '@nestjs/common';
import { MinioService } from 'nestjs-minio-client';
import { v4 as uuidv4 } from 'uuid';
import { Readable } from 'stream';

@Injectable()
export class PartitionFileService {

  constructor(private readonly minioClient: MinioService) {}

  async listAllBuckets() {
    return this.minioClient.client.listBuckets();
  }

  async createObject(bucket: string, file ): Promise<object> {
    try {
      // if needed file.originalname
      const uuid = uuidv4();
      await this.minioClient.client.putObject(bucket, uuid, file.buffer);
      const url = await this.getObjectUrl(bucket, file.fileName);
      return {
        id: uuid,
        url: url
      };
    } catch (error) {
      console.log(error);
      return null;
    }

  }

  async getObject(bucket: string, fileName: string){
    const stream = new Readable();
    var size = 0
    this.minioClient.client.getObject(bucket, fileName, function(err, dataStream) {
      if (err) {
        return console.log(err)
      }
      dataStream.on('data', function(chunk) {
        size += chunk.length
        stream.push(chunk);
      })
      dataStream.on('end', function() {
        console.log('End. Total size = ' + size)
        stream.push(null);
      })
      dataStream.on('error', function(err) {
        console.log(err)
      })
    })
    return stream;
  }

  async getObjectUrl(bucket: string, fileName: string): Promise<string> {
    return await this.minioClient.client.presignedUrl('GET', bucket, fileName, 24*60*60);
  }

  async deleteObject(bucket: string, fileName: string) {
    return await this.minioClient.client.removeObject(bucket, fileName);
  }

}
