import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

@Module({
    controllers: [AccountController],
    providers: [AccountService],
    exports: [AccountService],
})
export class AccountModule {}
