import { Module } from '@nestjs/common';
import { PartitionsController } from './partition.controller';
import { PartitionsService } from './partition.service';
import { DatabaseModule } from 'src/database/database.module';
import { partitionsProviders } from './partition.provider';
import { TicketsService } from 'src/ticket/ticket.service';
import { ticketsProviders } from 'src/ticket/ticket.provider';

@Module({
    controllers: [PartitionsController],
    providers: [PartitionsService, ...partitionsProviders, TicketsService, ...ticketsProviders],
    imports: [DatabaseModule],
})
export class PartitionModule {}
