import type { AccountResponse } from '@monorepo-ts-vue-nestjs/shared';
import { $axios } from '../client';

export async function getAccount() {
    return await $axios.get<AccountResponse>('/account');
}
