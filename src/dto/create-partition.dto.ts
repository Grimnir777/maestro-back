import { IsString } from 'class-validator';
import { Document } from 'mongoose';
import { Difficulty } from 'src/interfaces/partition.interface';

export class CreatePartitionDto extends Document {
  @IsString()
  readonly author: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly difficulty: Difficulty;

  @IsString()
  readonly linkPart: string;

  @IsString()
  readonly instrument: [{nom: string}];
}
