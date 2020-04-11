import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { TicketsService } from './ticket.service';
import { CreateTicketDto } from '../dto/create-ticket.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiParam, ApiOkResponse, ApiBadRequestResponse, ApiUnauthorizedResponse, ApiNotFoundResponse, ApiBody, ApiCreatedResponse } from '@nestjs/swagger';

@ApiTags('Tickets')
@UseGuards(JwtAuthGuard)
@Controller('tickets')
export class TicketsController {

    constructor(private ticketService: TicketsService) {}

    @Post()
    @ApiOperation({ summary: 'Create a ticket' })
    @ApiBody({type: CreateTicketDto})
    @ApiCreatedResponse({description: 'Return the ticket created'})
    @ApiBadRequestResponse({description: 'Impossible to create the ticket'})
    postTicket(@Body() ticket: CreateTicketDto): any{
      return this.ticketService.create(ticket);
    }

    @Put()
    @ApiBearerAuth()
    @ApiOperation({summary: 'Update a ticket'})
    @ApiBody({description:'The content of the ticket to update with the _id included', type: CreateTicketDto})
    @ApiOkResponse({description: 'Return the ticket modified'})
    @ApiBadRequestResponse({description: 'Impossible to update the ticket'})
    @ApiUnauthorizedResponse({description:'Error with your credentials, have you authenticated yourself ?'})
    putTicket(@Body() ticket: CreateTicketDto): any{
      return this.ticketService.update(ticket);
    } 

    @Get(':id')
    @ApiBearerAuth()
    @ApiOperation({summary: 'Get a ticket'})
    @ApiParam({name: 'id', example:'123456789'})
    @ApiOkResponse({description: 'Return the ticket.'})
    @ApiNotFoundResponse({description: 'Impossible to retrieve the ticket'})
    getTicketById(@Param('id') id: string): any{
      return this.ticketService.findById(id);
    }

    @Get()
    @ApiBearerAuth()
    @ApiOperation({summary: 'Get alls tickets'})
    @ApiOkResponse({description: 'Return all tickets', type: [CreateTicketDto]})
    @ApiBadRequestResponse({description: 'Impossible to retrieve tickets'})
    getAllTickets(): any{
      return this.ticketService.findAll();
    }

    @Delete(':id')
    @ApiBearerAuth()
    @ApiOperation({summary: 'Delete a ticket'})
    @ApiParam({name: 'id', example:'123456789'})
    @ApiOkResponse({description: 'Return a boolean to confirm the deletion',type: Boolean})
    @ApiBadRequestResponse({description: 'Impossible to delete the ticket'})
    @ApiUnauthorizedResponse({description:'Error with your credentials, have you authenticated yourself ?'})
    deleteTicket(@Param('id') id: string): any{
      return this.ticketService.deleteById(id);
    }
}
