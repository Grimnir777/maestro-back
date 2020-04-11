import { IsString, ArrayUnique } from 'class-validator';
import { Document } from 'mongoose';
import { UserType } from 'src/interfaces/user.interface';

export class GetUserDto extends Document {
  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @ArrayUnique()
  @IsString()
  mail: string;

  @ArrayUnique()
  @IsString()
  pseudo: string;

  @IsString()
  typeUser: UserType;
}
