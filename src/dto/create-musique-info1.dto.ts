import { IsString } from 'class-validator';
import { Document } from 'mongoose';

export class CreateMusiqueInfo1Dto extends Document {
  @IsString()
  readonly name: string;

  @IsString()
  readonly artiste: string;

}