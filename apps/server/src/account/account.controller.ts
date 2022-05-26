import { Controller, Get, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountResponse } from '@monorepo-ts-vue-nestjs/shared';
import { LocalAuthGuard } from '@/auth/guards/local-auth.guard';
import { UserSession } from '@/auth/decorators/user-session.decorator';
import { Session } from '@/db/session.entity';

@Controller('/account')
@UseGuards(LocalAuthGuard)
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Get('/')
    async getAccount(@UserSession() session: Session): Promise<AccountResponse> {
        return await this.accountService.getAccount(session);
    }
}
