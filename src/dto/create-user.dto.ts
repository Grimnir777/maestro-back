import { IsString, IsEnum } from 'class-validator';
import { Document } from 'mongoose';
import { UserType } from 'src/interfaces/user.interface';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto extends Document {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly lastname: string;

  @ApiProperty()
  @IsString()
  readonly mail: string;

  @ApiProperty()
  @IsString()
  readonly pseudo: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty({ enum: UserType })
  @IsEnum(UserType)
  typeUser: UserType;
}
