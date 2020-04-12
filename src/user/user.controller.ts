import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiBody, ApiCreatedResponse, ApiBadRequestResponse, ApiUnauthorizedResponse, ApiOkResponse, ApiParam, ApiNotFoundResponse, ApiBearerAuth } from '@nestjs/swagger';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(
      private userService: UsersService
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create a user' })
    @ApiBody({type: CreateUserDto})
    @ApiCreatedResponse({description: 'Return the user created'})
    @ApiBadRequestResponse({description: 'Impossible to create the user'})
    postUser(@Body() user: CreateUserDto): any{
      return this.userService.create(user);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    @ApiBearerAuth()
    @ApiOperation({summary: 'Update a user'})
    @ApiBody({description:'The content of the user to update with the _id included', type: CreateUserDto})
    @ApiOkResponse({description: 'Return the user modified'})
    @ApiBadRequestResponse({description: 'Impossible to update the user'})
    @ApiUnauthorizedResponse({description:'Error with your credentials, have you authenticated yourself ?'})
    putUser(@Body() user: CreateUserDto): any{
      return this.userService.update(user);
    }

    
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    @ApiBearerAuth()
    @ApiOperation({summary: 'Get a user'})
    @ApiParam({name: 'id', example:'123456789'})
    @ApiOkResponse({description: 'Return the user.'})
    @ApiNotFoundResponse({description: 'Impossible to retrieve the user'})
    getUserById(@Param('id') id: string): any{
      return this.userService.findById(id);
    }

    @UseGuards(JwtAuthGuard)
    @UseGuards(RolesGuard)
    @Get()
    @ApiBearerAuth()
    @ApiOperation({summary: 'Get alls users'})
    @ApiOkResponse({description: 'Return all users', type: [CreateUserDto]})
    @ApiBadRequestResponse({description: 'Impossible to retrieve users'})
    getAllUsers(): any{
      return this.userService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    @ApiBearerAuth()
    @ApiOperation({summary: 'Delete a user'})
    @ApiParam({name: 'id', example:'123456789'})
    @ApiOkResponse({description: 'Return a boolean to confirm the deletion',type: Boolean})
    @ApiBadRequestResponse({description: 'Impossible to delete the user'})
    @ApiUnauthorizedResponse({description:'Error with your credentials, have you authenticated yourself ?'})
    deleteUser(@Param('id') id: string): any{
      return this.userService.deleteById(id);
    }
}
