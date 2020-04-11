import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @ApiProperty()
  @IsString()
  readonly pseudo: string;
  
  @ApiProperty()
  @IsString()
  readonly password: string;
}
