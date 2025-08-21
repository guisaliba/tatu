import { Global, Module } from '@nestjs/common';
import { PrismaUserRepository } from './adapters/prisma/prisma-user.repository';
import { PrismaService } from './services/prisma.service';
import { USER_REPOSITORY } from './constants/injection-tokens';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: USER_REPOSITORY,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [PrismaService, USER_REPOSITORY],
})
export class SharedModule {}
