import { IsString, IsEnum } from 'class-validator';
import { Document } from 'mongoose';
import { State } from '../interfaces/ticket.interface';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTicketNLDto extends Document {
  @ApiProperty()
  @IsString()
  readonly title: string;

  @ApiProperty()
  @IsString()
  readonly information: string;

  @ApiProperty({ enum: State })
  @IsEnum(State)
  readonly state: State;

  @ApiProperty()
  @IsString()
  readonly idUser: string;
}
