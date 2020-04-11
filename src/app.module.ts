import { Module } from '@nestjs/common';
import { DatabaseModule} from './database/database.module';
import { UserModule } from './user/user.module';
import { TicketModule } from './ticket/ticket.module';
import { PartitionModule } from './partition/partition.module';
import { MusiqueInfoModule } from './musique-info/musique-info.module';
import { AuthModule } from './auth/auth.module';
import { PartitionFileModule } from './partition-file/partition-file.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    TicketModule,
    PartitionModule,
    AuthModule,
    MusiqueInfoModule,
    PartitionFileModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })    
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
