import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './user/user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private userService: UsersService) {}
  
}
