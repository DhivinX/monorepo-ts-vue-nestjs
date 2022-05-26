import type { AuthLoginDto, AuthLoginResponse } from '@monorepo-ts-vue-nestjs/shared';
import { $axios } from '../client';

export async function login(dto: AuthLoginDto) {
    return await $axios.post<AuthLoginResponse>('/auth/login', dto);
}

export async function logout() {
    return await $axios.post<void>('/auth/logout');
}
