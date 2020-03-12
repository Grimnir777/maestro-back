import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule} from './database/database.module';
import { UserModule } from './user/user.module';
import { TicketModule } from './ticket/ticket.module';
import { PartitionModule } from './partition/partition.module';
import { CommentaireModule } from './commentaire/commentaire.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, UserModule, TicketModule, PartitionModule, CommentaireModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
