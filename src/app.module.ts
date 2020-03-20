import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule} from './database/database.module';
import { UserModule } from './user/user.module';
import { TicketModule } from './ticket/ticket.module';
import { PartitionModule } from './partition/partition.module';
import { CommentaireModule } from './commentaire/commentaire.module';
import { AuthModule } from './auth/auth.module';
import { PartitionFileModule } from './partition-file/partition-file.module';

@Module({
  imports: [DatabaseModule, UserModule, TicketModule, PartitionModule, CommentaireModule, AuthModule, PartitionFileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
