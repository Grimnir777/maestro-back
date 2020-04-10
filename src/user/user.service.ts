import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User, UserType } from '../interfaces/user.interface';
import { CreateUserDto } from '../dto/create-user.dto';
const bcrypt = require('bcrypt');
const saltRounds = 10;

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<User>,
  ) {}

  async create(user: CreateUserDto): Promise<any> {
    bcrypt.hash(user.password, saltRounds)
    .then((hash)=> {
      user.password = hash;
      user.typeUser = UserType.user; 
      const createdUser = new this.userModel(user);
      return createdUser.save();
    })
    .catch((error) => {
      return error;
    })
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
