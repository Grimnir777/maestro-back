import { Injectable } from '@nestjs/common';
import { UsersService } from '../user/user.service';
const bcrypt = require('bcrypt');
const saltRounds = 10;

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(userpseudo: string, pass: string): Promise<any> {
    const user = await this.usersService.findByPseudo(userpseudo);
    bcrypt.compare(pass, user.password, function(err, result) {
        return result;
    });
    return null;
  }
}