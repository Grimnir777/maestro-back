import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Ticket } from '../interfaces/ticket.interface';
import { CreateTicketDto } from '../dto/create-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(
    @Inject('TICKET_MODEL')
    private readonly ticketModel: Model<Ticket>,
  ) {}

  async create(ticket: CreateTicketDto): Promise<Ticket> {
    const createdTicket = new this.ticketModel(ticket);
    return createdTicket.save();
  }
}