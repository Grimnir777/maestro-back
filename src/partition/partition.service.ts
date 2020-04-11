import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Partition } from '../interfaces/partition.interface';
import { CreatePartitionDto } from '../dto/create-partition.dto';

@Injectable()
export class PartitionsService {
  constructor(
    @Inject('PARTITION_MODEL')
    private readonly partitionModel: Model<Partition>,
  ) {}

  async create(partition: CreatePartitionDto): Promise<Partition> {
    const createdPartition = new this.partitionModel(partition);
    return createdPartition.save();
  }

  async findById(id: string): Promise<Partition>{
    return this.partitionModel.findById(id);
  }

  async findAll(): Promise<Partition[]> {
    return this.partitionModel.find();
  }

  async update(partition: CreatePartitionDto): Promise<Partition> {
    const partitionToUpdate = this.findById(partition._id);
    return (await partitionToUpdate).update(partition);
  }

  async deleteById(id: string): Promise<any>{
    return this.partitionModel.findByIdAndRemove(id);
  }
}
