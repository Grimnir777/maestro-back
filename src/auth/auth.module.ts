import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { usersProviders } from 'src/user/user.provider';
import { UsersService } from 'src/user/user.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [AuthService, LocalStrategy, ...usersProviders, UsersService],
  imports: [UserModule, PassportModule, DatabaseModule],
})
export class AuthModule {}