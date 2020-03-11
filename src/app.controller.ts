import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './user/user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private userService: UsersService) {}

  @Post()
  postUser(@Body() user: CreateUserDto): any{
    return this.userService.create(user);
  }

  @Put()
  putUser(@Body() user: CreateUserDto): any{
    return this.userService.update(user);
  } 

  @Get(':id')
  getUserById(@Param('id') id: string): any{
    return this.userService.findById(id);
  }

  @Get()
  getAllUsers(): any{
    return this.userService.findAll();
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): any{
    return this.userService.deleteById(id);
  }
}
