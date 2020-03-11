import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TicketsService } from './ticket.service';
import { CreateTicketDto } from '../dto/create-ticket.dto';

@Controller('tickets')
export class TicketsController {

    constructor(private ticketService: TicketsService) {}

    @Post()
    postUser(@Body() ticket: CreateTicketDto): any{
        return this.ticketService.create(ticket);
    }

    @Put()
    putUser(@Body() user: CreateTicketDto): any{
        return this.ticketService.update(user);
    } 

    @Get(':id')
    getUserById(@Param('id') id: string): any{
        return this.ticketService.findById(id);
    }

    @Get()
    getAllUsers(): any{
        return this.ticketService.findAll();
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string): any{
        return this.ticketService.deleteById(id);
    }
}