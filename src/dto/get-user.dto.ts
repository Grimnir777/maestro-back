import { IsString, IsEnum } from 'class-validator';
import { Document } from 'mongoose';
import { UserType } from 'src/interfaces/user.interface';
import { ApiProperty } from '@nestjs/swagger';

export class GetUserDto extends Document {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  lastname: string;

  @ApiProperty()
  @IsString()
  mail: string;

  @ApiProperty()
  @IsString()
  pseudo: string;

  @ApiProperty({ enum: UserType })
  @IsEnum(UserType)
  typeUser: UserType;
}
