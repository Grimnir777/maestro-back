import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { CreateUserDto } from '../dto/create-user.dto';
const bcrypt = require('bcrypt');
const saltRounds = 10;

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<User>,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
      const createdUser = new this.userModel({
        name: user.name,
        lastname: user.lastname,
        mail: user.mail,
        pseudo: user.pseudo,
        password: hash,
        typeUser: user.typeUser,
      });
      return createdUser.save();
    });
   return null;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findById(id: string): Promise<User>{
    return this.userModel.findById(id);
  }

  async findByPseudo(userpseudo: string): Promise<User>{
    return this.userModel.findOne({pseudo: userpseudo});
  }
  
  async update(user: CreateUserDto): Promise<User>{
    const userToUpdate = this.findById(user.id);
    return (await userToUpdate).update(user);
  }

  async deleteById(id: string): Promise<any>{
    return this.userModel.findByIdAndRemove(id);
  }
}