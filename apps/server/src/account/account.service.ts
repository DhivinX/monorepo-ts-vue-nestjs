import { AccountResponse } from '@monorepo-ts-vue-nestjs/shared';
import { Injectable } from '@nestjs/common';
import { Session } from '@/db/session.entity';

@Injectable()
export class AccountService {
    async getAccount(session: Session): Promise<AccountResponse> {
        const { id, email, firstName, lastName, createdAt } = session.user;
        return { id, email, firstName, lastName, createdAt };
    }
}
