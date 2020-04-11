import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { PartitionsService } from './partition.service';
import { TicketsService } from '../ticket/ticket.service';
import { CreatePartitionDto } from '../dto/create-partition.dto';
import { CreateTicketNLDto } from '../dto/create-ticketNotLinked.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('partitions')
export class PartitionsController {

    constructor(
      private partitionService: PartitionsService,
      private ticketService: TicketsService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    postPartition(@Body() partition: CreatePartitionDto): any{
      return this.partitionService.create(partition);
    }

    @UseGuards(JwtAuthGuard)
    @Post(':id/tickets')
    postTicketOnPartition(@Param('id') id: string, @Body() ticket: CreateTicketNLDto): any{
      return this.ticketService.createWithId(ticket, id);
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    putPartition(@Body() partition: CreatePartitionDto): any{
      console.log(partition);
      
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

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    deletePartition(@Param('id') id: string): any{
      return this.partitionService.deleteById(id);
    }
}
