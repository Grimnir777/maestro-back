import { IsString } from 'class-validator';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
export class CreateMusiqueInfo2Dto extends Document {
  @ApiProperty()
  @IsString()
  readonly name: string;
  
  @ApiProperty()
  @IsString()
  readonly artiste: string;

  @ApiProperty()
  @IsString()
  readonly urlMusique: string; 

  @ApiProperty()
  @IsString()
  readonly urlPochette: string; 
}