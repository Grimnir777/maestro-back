import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { MusiqueInfo } from '../interfaces/musique-info.interface';
import { CreateMusiqueInfo } from '../dto/create-musique-info.dto';

@Injectable()
export class MusiqueInfoService {
  constructor(
    @Inject('MUSIQUE-INFO_MODEL')
    private readonly musiqueInfoModel: Model<MusiqueInfo>,
  ) {}

  async create(musiqueInfo: CreateMusiqueInfo): Promise<MusiqueInfo> {
    const createdMusiqueInfo = new this.musiqueInfoModel(musiqueInfo);
    return createdMusiqueInfo.save();
  }

}