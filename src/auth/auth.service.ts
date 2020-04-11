import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  public async sign(userpseudo: string, pass: string): Promise<object> {
    // Check for user
    const user = await this.usersService.findByPseudo(userpseudo);
    if (!user) throw new UnauthorizedException('user not found');

    // check for password
    bcrypt.compare(pass, user.password)
    .then((result) => {
      return result;
    })
    .catch( (error) => {
      return error;
    });

    // Create signature
    const payload = {
        id: user.id,
        pseudo: user.pseudo
    };
    const token = await this.jwtService.sign(payload,{expiresIn:'2 days'});
    return {token,expiresIn: 2};
}
}
