import { Module } from '@nestjs/common';
import { CommentairesController } from './commentaire.controller';
import { CommentairesService } from './commentaire.service';
import { DatabaseModule } from 'src/database/database.module';
import { commentairesProviders } from './commentaire.provider';

@Module({
    controllers: [CommentairesController],
    providers: [CommentairesService, ...commentairesProviders],
    imports: [DatabaseModule],
})
export class CommentaireModule {}
