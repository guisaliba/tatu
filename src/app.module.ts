import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { AuthModule } from './auth/auth.module';
import { PaymentsModule } from './payments/payments.module';
import { SharedModule } from './shared/shared.module';
import { StudiosModule } from './studios/studios.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    AppointmentsModule,
    AuthModule,
    PaymentsModule,
    SharedModule,
    StudiosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
