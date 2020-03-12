import { IsString } from 'class-validator';
import { Document } from 'mongoose';

export class CreatePartitionDto extends Document {
  @IsString()
  readonly author: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly difficulty: string;

  @IsString()
  readonly linkPart: string;

  @IsString()
  readonly instrument: [{nom: string}];
}