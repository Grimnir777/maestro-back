import { Connection } from 'mongoose';
import { TicketSchema } from '../schemas/ticket.schema';

export const ticketsProviders = [
  {
    provide: 'TICKET_MODEL',
    useFactory: (connection: Connection) => connection.model('Ticket', TicketSchema),
    inject: ['DATABASE_CONNECTION']
  },
];