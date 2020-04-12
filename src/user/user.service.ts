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
    private readonly userModel: Model<User>
  ) {}

  create(user: CreateUserDto): Promise<any> {
    return new Promise(async (resolve, reject) => {
      bcrypt.hash(user.password, saltRounds)
      .then(async (hash)=> {
        user.password = hash;
        user.typeUser = UserType.user; 
        const createdUser = new this.userModel(user);
        const newUser: User = await createdUser.save();
        delete newUser.password;
        resolve(newUser);
      })
      .catch((error) => {
        reject(error);
      })
    });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findById(id: string): Promise<User>{
    return this.userModel.findById(id);
  }

  async findByPseudo(pseudo: any): Promise<User>{
    return this.userModel.findOne({pseudo});
  }
  
  async update(user: CreateUserDto): Promise<User>{
    const userToUpdate = this.findById(user.id);
    return (await userToUpdate).update(user);
  }

  async deleteById(id: string): Promise<any>{
    return this.userModel.findByIdAndRemove(id);
  }
}
