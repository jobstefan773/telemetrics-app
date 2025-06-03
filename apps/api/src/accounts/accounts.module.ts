import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AccountsController],
  providers: [AccountsService],
  imports: [PrismaModule, UsersModule],
})
export class AccountsModule {}
