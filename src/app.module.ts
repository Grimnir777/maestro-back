import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { usersProviders } from './user/user.provider';
import { DatabaseModule} from './database/database.module';
import { UsersService } from './user/user.service';
import { UserModule } from './user/user.module';
import { TicketModule } from './ticket/ticket.module';
import { PartitionModule } from './partition/partition.module';

@Module({
  imports: [DatabaseModule, UserModule, TicketModule, PartitionModule],
  controllers: [AppController],
  providers: [AppService, ...usersProviders, UsersService],
})
export class AppModule {}
