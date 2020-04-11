import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { PartitionsService } from './partition.service';
import { TicketsService } from '../ticket/ticket.service';
import { CreatePartitionDto } from '../dto/create-partition.dto';
import { CreateTicketNLDto } from '../dto/create-ticketNotLinked.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiTags, ApiBody, ApiOperation, ApiCreatedResponse, ApiBadRequestResponse, ApiParam, ApiOkResponse, ApiNotFoundResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiTags('Partitions')
@Controller('partitions')
export class PartitionsController {

    constructor(
      private partitionService: PartitionsService,
      private ticketService: TicketsService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    @ApiOperation({ summary: 'Create a partition' })
    @ApiBody({type: CreatePartitionDto})
    @ApiCreatedResponse({description: 'Return the partition created'})
    @ApiBadRequestResponse({description: 'Impossible to create the partition'})
    @ApiUnauthorizedResponse({description:'Error with your credentials, have you authenticated yourself ?'})
    postPartition(@Body() partition: CreatePartitionDto): any{
      return this.partitionService.create(partition);
    }

    @UseGuards(JwtAuthGuard)
    @Post(':id/tickets')
    @ApiOperation({ summary: 'Create a ticket' })
    @ApiParam({name: 'id', example:'123456789'})
    @ApiBody({type: CreateTicketNLDto})
    @ApiCreatedResponse({description: 'Return the ticket created'})
    @ApiBadRequestResponse({description: 'Impossible to create the ticket'})
    @ApiUnauthorizedResponse({description:'Error with your credentials, have you authenticated yourself ?'})
    postTicketOnPartition(@Param('id') id: string, @Body() ticket: CreateTicketNLDto): any{
      return this.ticketService.createWithId(ticket, id);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    @ApiOperation({summary: 'Update a partition'})
    @ApiBody({description:'The content of the partition to update with the _id included', type: CreatePartitionDto})
    @ApiOkResponse({description: 'Return the partiton modified'})
    @ApiBadRequestResponse({description: 'Impossible to update the partition'})
    @ApiUnauthorizedResponse({description:'Error with your credentials, have you authenticated yourself ?'})
    putPartition(@Body() partition: CreatePartitionDto): any{
      console.log(partition);
      
      return this.partitionService.update(partition);
    } 

    @Get(':id')
    @ApiOperation({summary: 'Get a partition'})
    @ApiParam({name: 'id', example:'123456789'})
    @ApiOkResponse({description: 'Return the partition.'})
    @ApiNotFoundResponse({description: 'Impossible to retrieve the partition'})
    getPartitionById(@Param('id') id: string): any{
      return this.partitionService.findById(id);
    }

    @Get()
    @ApiOperation({summary: 'Get all partitions'})
    @ApiParam({name: 'id', example:'123456789'})
    @ApiOkResponse({description: 'Return a boolean to confirm the deletion',type: Boolean})
    @ApiBadRequestResponse({description: 'Impossible to delete the partition'})
    getAllPartitions(): any{
      return this.partitionService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    @ApiOperation({summary: 'Delete a partition'})
    @ApiParam({name: 'id', example:'123456789'})
    @ApiOkResponse({description: 'Return a boolean to confirm the deletion',type: Boolean})
    @ApiBadRequestResponse({description: 'Impossible to delete the partition'})
    @ApiUnauthorizedResponse({description:'Error with your credentials, have you authenticated yourself ?'})
    deletePartition(@Param('id') id: string): any{
      return this.partitionService.deleteById(id);
    }
}
