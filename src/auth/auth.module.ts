import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { usersProviders } from 'src/user/user.provider';
import { UsersService } from 'src/user/user.service';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  controllers: [
    AuthController
  ],
  imports: [
    UserModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
    DatabaseModule,
    JwtModule.register({
      secret: process.env.jwtSecret,
      signOptions: { expiresIn: '2 days' },
    })
  ],
  providers: [
    AuthService,
    ...usersProviders,
    UsersService,
    JwtStrategy
  ],
  exports: [
    AuthService
  ]
})
export class AuthModule {}
