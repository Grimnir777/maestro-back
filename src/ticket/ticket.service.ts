import { Model, STATES } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Ticket } from '../interfaces/ticket.interface';
import { CreateTicketDto } from '../dto/create-ticket.dto';
import { CreateTicketNLDto } from 'src/dto/create-ticketNotLinked.dto';

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

  async findById(id: string): Promise<Ticket>{
    return this.ticketModel.findById(id);
  }

  async findAll(): Promise<Ticket[]> {
    return this.ticketModel.find();
  }

  async update(ticket: CreateTicketDto): Promise<Ticket> {
    const ticketToUpdate = this.findById(ticket.id);
    return (await ticketToUpdate).update(ticket);
  }

  async deleteById(id: string): Promise<any>{
    return this.ticketModel.findByIdAndRemove(id);
  }

  // create from partition controller
  async createWithId(ticket: CreateTicketNLDto, id: string): Promise<Ticket> {
    const createdTicket = new this.ticketModel({
      title: ticket.title,
      information: ticket.information,
      state: 'open',
      idPartition: id,
      idUser: ticket.idUser,
    });
    return createdTicket.save();
  }
}
