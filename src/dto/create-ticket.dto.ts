import { IsString } from 'class-validator';
import { Document } from 'mongoose';
import { State } from '../interfaces/ticket.interface';

export class CreateTicketDto extends Document {
  @IsString()
  readonly title: string;

  @IsString()
  readonly information: string;

  @IsString()
  readonly state: State;

  @IsString()
  readonly idPartition: string;

  @IsString()
  readonly idUser: string;
}
