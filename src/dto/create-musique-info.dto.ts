import { IsString } from 'class-validator';
import { Document } from 'mongoose';

export class CreateMusiqueInfoDto extends Document {
  @IsString()
  readonly name: string;

  @IsString()
  readonly artiste: string;

  @IsString()
  readonly url: string; 
}