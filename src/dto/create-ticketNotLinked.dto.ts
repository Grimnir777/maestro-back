import { IsString } from 'class-validator';
import { Document } from 'mongoose';
import { State } from '../interfaces/ticket.interface';

export class CreateTicketNLDto extends Document {
  @IsString()
  readonly title: string;

  @IsString()
  readonly information: string;

  @IsString()
  readonly state: State;

  @IsString()
  readonly idUser: string;
}
