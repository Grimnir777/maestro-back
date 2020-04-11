import { Controller, Post, Body} from '@nestjs/common';

import { AuthService } from 'src/auth/auth.service';
import { LoginUserDto } from 'src/dto/login-user.dto';
import { ApiTags, ApiOperation, ApiBody, ApiCreatedResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { AuthResponse } from './models/auth-response.model';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService
  ) {}

  @Post('login')
  @ApiOperation({ summary: 'Login a user' })
  @ApiBody({type: LoginUserDto})
  @ApiCreatedResponse({description: 'Return the token and its expiration date (in days)'})
  @ApiNotFoundResponse({description: 'Wrong username or password'})
  login(@Body() user: LoginUserDto): Promise<AuthResponse> {
    return this.authService.sign(user.pseudo, user.password);
  }

    
}
