import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {

    constructor(
        private userService: UsersService
    ) {}

    @Post()
    postUser(@Body() user: CreateUserDto): any{
        return this.userService.create(user);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    putUser(@Body() user: CreateUserDto): any{
        return this.userService.update(user);
    } 

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getUserById(@Param('id') id: string): any{
        return this.userService.findById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    getAllUsers(): any{
        return this.userService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deleteUser(@Param('id') id: string): any{
        return this.userService.deleteById(id);
    }
}
