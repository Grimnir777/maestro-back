import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthResponse } from './models/auth-response.model';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  public async sign(userpseudo: string, pass: string): Promise<AuthResponse> {
    // Check for user
    const user = await this.usersService.findByPseudo(userpseudo);
    if (!user) throw new NotFoundException('user not found');

    if(bcrypt.compareSync(pass, user.password)) {
      const payload = {
        id: user.id,
        pseudo: user.pseudo,
        typeUser: user.typeUser
      };
      const token = await this.jwtService.sign(payload,{expiresIn:'2 days'});
      return new AuthResponse(token, 2, user.typeUser);
    } else {
      // Passwords don't match
      throw new NotFoundException('wrong password');
    }
  }

}
