import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

/*
const myPlaintextPassword = 's0/\/\P4$$w0rD';
    const someOtherPlaintextPassword = 'not_bacon'*/
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

    
    
    

  async validate(userpseudo: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(userpseudo, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}