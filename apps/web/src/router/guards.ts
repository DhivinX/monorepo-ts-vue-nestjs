import type { Router } from 'vue-router';
import { useAccountStore } from '@/stores/account';

export enum AuthMeta {
    None,
    Required,
    Optional,
}

export function useAuthGuard(router: Router) {
    router.beforeEach(async (to) => {
        const accountStore = useAccountStore();
        accountStore.checkAuthCookie();

        if (to.meta.auth === AuthMeta.Required && !accountStore.state.authenticated) {
            return { name: 'login' };
        }

        if (to.meta.auth === AuthMeta.None && accountStore.state.authenticated) {
            return { name: 'dashboard' };
        }
    });
}
