import { Module } from '@nestjs/common';
import { DatabaseModule} from './database/database.module';
import { UserModule } from './user/user.module';
import { TicketModule } from './ticket/ticket.module';
import { PartitionModule } from './partition/partition.module';
import { AuthModule } from './auth/auth.module';
import { PartitionFileModule } from './partition-file/partition-file.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal:true
    }),
    DatabaseModule,
    UserModule,
    TicketModule,
    PartitionModule,
    AuthModule,
    PartitionFileModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
