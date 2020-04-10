import { Controller, Post, Body} from '@nestjs/common';

import { AuthService } from 'src/auth/auth.service';
import { LoginUserDto } from 'src/dto/login-user.dto';


@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService
  ) {}

  @Post('login')
  login(@Body() user: LoginUserDto): any{
    return this.authService.sign(user.pseudo, user.password);
  }

    
}
