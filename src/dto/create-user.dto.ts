import { IsString, ArrayUnique } from 'class-validator';
import { Document } from 'mongoose';

export class CreateUserDto extends Document {
  @IsString()
  readonly name: string;

  @IsString()
  readonly lastname: string;

  @ArrayUnique()
  @IsString()
  readonly mail: string;

  @ArrayUnique()
  @IsString()
  readonly pseudo: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly typeUser: string;
}