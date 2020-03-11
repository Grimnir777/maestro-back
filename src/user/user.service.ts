import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../interfaces/user.interface';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<User>,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findById(id: string): Promise<User>{
    return this.userModel.findById(id);
  }

  async update(user: CreateUserDto): Promise<User>{
    const userToUpdate = this.findById(user.id);
    return (await userToUpdate).update(user);
  }

  async deleteById(id: string): Promise<any>{
    console.log("id ", id);
    return this.userModel.findByIdAndRemove(id);
  }
}