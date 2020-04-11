import { IsString, IsArray, IsEnum } from 'class-validator';
import { Document } from 'mongoose';
import { Difficulty } from 'src/interfaces/partition.interface';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePartitionDto extends Document {
  @ApiProperty()
  @IsString()
  readonly author: string;

  @ApiProperty()
  @IsString()
  readonly title: string;

  @ApiProperty({ enum: Difficulty })
  @IsEnum(Difficulty)
  readonly difficulty: Difficulty;

  @ApiProperty()
  @IsString()
  readonly linkPart: string;

  @ApiProperty()
  @IsString()
  readonly instrument: [{nom: string}];

  @ApiProperty()
  @IsArray()
  comments: [{ idUser: String, pseudoUser: String, text: String, date: Date }];
}
