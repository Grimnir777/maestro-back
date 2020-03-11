import { Module } from '@nestjs/common';
import { TicketsController } from './ticket.controller';
import { TicketsService } from './ticket.service';
import { DatabaseModule } from 'src/database/database.module';
import { ticketsProviders } from './ticket.provider';

@Module({
    controllers: [TicketsController],
    providers: [TicketsService, ...ticketsProviders],
    imports: [DatabaseModule],
})
export class TicketModule {}
