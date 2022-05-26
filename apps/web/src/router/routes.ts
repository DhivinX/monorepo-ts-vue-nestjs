import type { RouteRecordRaw } from 'vue-router';
import { AuthMeta } from './guards';

import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import LoginPage from '@/pages/LoginPage.vue';
import DashboardPage from '@/pages/DashboardPage.vue';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'login',
                component: LoginPage,
                meta: {
                    auth: AuthMeta.None,
                },
            },
        ],
    },
    {
        path: '/app',
        component: AppLayout,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: DashboardPage,
                meta: {
                    auth: AuthMeta.Required,
                },
            },
        ],
    },
];
