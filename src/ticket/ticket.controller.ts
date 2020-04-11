import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { TicketsService } from './ticket.service';
import { CreateTicketDto } from '../dto/create-ticket.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('tickets')
export class TicketsController {

    constructor(private ticketService: TicketsService) {}

    @Post()
    postTicket(@Body() ticket: CreateTicketDto): any{
        return this.ticketService.create(ticket);
    }

    @Put()
    putTicket(@Body() ticket: CreateTicketDto): any{
        return this.ticketService.update(ticket);
    } 

    @Get(':id')
    getTicketById(@Param('id') id: string): any{
        return this.ticketService.findById(id);
    }

    @Get()
    getAllTickets(): any{
        return this.ticketService.findAll();
    }

    @Delete(':id')
    deleteTicket(@Param('id') id: string): any{
        return this.ticketService.deleteById(id);
    }
}
