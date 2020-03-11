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
}