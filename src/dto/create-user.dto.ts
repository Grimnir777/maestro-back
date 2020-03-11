import { IsString } from 'class-validator';
import { Document } from 'mongoose';

export class CreateUserDto extends Document {
  @IsString()
  readonly name: string;

  @IsString()
  readonly lastname: string;

  @IsString()
  readonly mail: string;

  @IsString()
  readonly pseudo: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly typeUser: string;
}