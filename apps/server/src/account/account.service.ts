import { AccountResponse } from '@monorepo-ts-vue-nestjs/shared';
import { Injectable } from '@nestjs/common';
import { Session } from '@/db/session.entity';
import * as crypto from 'crypto';

@Injectable()
export class AccountService {
    async getAccount(session: Session): Promise<AccountResponse> {
        const { id, email, firstName, lastName, createdAt } = session.user;
        const avatar = this.getGravatar(email);
        return { id, email, firstName, lastName, avatar, createdAt };
    }

    getGravatar(email: string): string {
        const hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
        const avatar = `https://www.gravatar.com/avatar/${hash}?s=200&d=mp`;
        return avatar;
    }
}
