import { createRouter, createWebHistory } from 'vue-router';
import { AuthMeta, useAuthGuard } from './guards';
import { routes } from './routes';

declare module 'vue-router' {
    export interface RouteMeta {
        auth: AuthMeta;
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

useAuthGuard(router);

export default router;
