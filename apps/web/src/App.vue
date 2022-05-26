<template>
    <router-view />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useAppStore } from './stores/app';
import { useAccountStore } from './stores/account';
import { useI18n } from 'vue-i18n';
import { onResponseError, onResponseSuccess } from '@/common';

const $q = useQuasar();
const { t } = useI18n();

const appStore = useAppStore();
const accountStore = useAccountStore();

onResponseSuccess(() => {
    appStore.state.networkError = false;
});

onResponseError((e) => {
    if (e.isNetworkError) {
        appStore.state.networkError = true;
    } else {
        appStore.state.networkError = false;

        if (e.response.status === 401) {
            if (accountStore.state.authenticated) {
                $q.notify({
                    icon: 'mdi-cookie',
                    message: t('account.session_exp'),
                    timeout: 2000,
                });
            }

            accountStore.setAuthenticated(false);
        }
    }
});
</script>
