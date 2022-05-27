<template>
    <q-layout view="lHh LpR lff">
        <template v-if="accountStore.state.loaded">
            <q-header class="app-header bg-white text-grey-8 q-px-sm">
                <AppNetworkError />

                <q-toolbar class="q-pa-sm">
                    <q-btn dense flat round icon="mdi-menu" @click="toggleDrawer" />

                    <q-toolbar-title></q-toolbar-title>

                    <AppAccountMenu />
                </q-toolbar>
            </q-header>

            <AppDrawer v-model="drawerOpen" />

            <q-page-container class="app-page-container">
                <router-view />
            </q-page-container>
        </template>

        <template v-else>
            <AppNetworkError class="fixed-top" />
            <div class="window-height window-width row justify-center items-center q-pa-md bg-grey-3">
                <q-spinner color="primary" size="50px" />
            </div>
        </template>
    </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAccountStore } from '@/stores/account';
import { usePromiseState, api } from '@/common';
import AppNetworkError from '@/components/AppNetworkError.vue';
import AppAccountMenu from '@/components/AppAccountMenu.vue';
import AppDrawer from '@/components/AppDrawer.vue';

const accountStore = useAccountStore();
const drawerOpen = ref<boolean>(false);

function toggleDrawer() {
    drawerOpen.value = !drawerOpen.value;
}

const accountAction = usePromiseState(async () => {
    const res = await api.users.getCurrent();
    accountStore.load(res.data);
});

accountAction.execute(500);
</script>
