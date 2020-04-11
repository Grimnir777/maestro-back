import { IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  readonly pseudo: string;

  @IsString()
  readonly password: string;
}
