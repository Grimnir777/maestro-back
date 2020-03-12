import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PartitionsService } from './partition.service';
import { TicketsService } from '../ticket/ticket.service';
import { CreatePartitionDto } from '../dto/create-partition.dto';
import { CreateTicketNLDto } from '../dto/create-ticketNotLinked.dto';

@Controller('partitions')
export class PartitionsController {

    constructor(private partitionService: PartitionsService, private ticketService: TicketsService) {}

    @Post()
    postPartition(@Body() partition: CreatePartitionDto): any{
        return this.partitionService.create(partition);
    }

    @Post(':id/tickets')
    postTicketOnPartition(@Param('id') id: string, @Body() ticket: CreateTicketNLDto): any{
        return this.ticketService.createWithId(ticket, id);
    }

    @Put()
    putPartition(@Body() partition: CreatePartitionDto): any{
        return this.partitionService.update(partition);
    } 

    @Get(':id')
    getPartitionById(@Param('id') id: string): any{
        return this.partitionService.findById(id);
    }

    @Get()
    getAllPartitions(): any{
        return this.partitionService.findAll();
    }

    @Delete(':id')
    deletePartition(@Param('id') id: string): any{
        return this.partitionService.deleteById(id);
    }
}