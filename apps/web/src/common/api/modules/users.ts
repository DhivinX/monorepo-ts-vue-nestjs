import type { UserProfileResponse } from '@monorepo-ts-vue-nestjs/shared';
import { $axios } from '../client';

export async function getCurrent() {
    return await $axios.get<UserProfileResponse>('/users/current');
}
