import { IsString, ArrayUnique } from 'class-validator';
import { Document } from 'mongoose';
import { UserType } from 'src/interfaces/user.interface';

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
  password: string;

  @IsString()
  typeUser: UserType;
}
