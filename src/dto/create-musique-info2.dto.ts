import { IsString } from 'class-validator';
import { Document } from 'mongoose';

export class CreateMusiqueInfo2Dto extends Document {
  @IsString()
  readonly name: string;

  @IsString()
  readonly artiste: string;

  @IsString()
  readonly url: string; 
}