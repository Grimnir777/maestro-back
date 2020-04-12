import { Module } from '@nestjs/common';
import { MusiqueInfoController } from './musique-info.controller';
import { MusiqueInfoService } from './musique-info.service';
import { musiqueInfoProviders } from './musique-info.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    controllers: [MusiqueInfoController],
    providers: [MusiqueInfoService, ...musiqueInfoProviders],
    imports: [DatabaseModule],
})
export class MusiqueInfoModule {}
