import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { usersProviders } from './user.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    controllers: [UsersController],
    providers: [UsersService, ...usersProviders],
    imports: [DatabaseModule],
})
export class UserModule {}
