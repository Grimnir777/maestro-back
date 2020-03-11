import { IsString } from 'class-validator';
import { Document } from 'mongoose';

export class CreateTicketDto extends Document {
  @IsString()
  readonly title: string;

  @IsString()
  readonly information: string;

  @IsString()
  readonly state: string;
}