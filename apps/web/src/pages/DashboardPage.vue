<template>
    <AppPage>
        <template v-slot:header>
            <DashboardHeader />
        </template>

        <div class="row q-col-gutter-lg">
            <div class="col-12 col-lg-4">
                <q-card>
                    <q-card-section class="title">Lorem, ipsum.</q-card-section>
                    <q-card-section>
                        <div>Email: {{ accountStore.state.email }}</div>
                        <div>Name: {{ accountStore.state.fullname }}</div>
                        <div>Created at: {{ accountStore.state.createdAt }}</div>
                    </q-card-section>
                </q-card>
            </div>

            <div class="col-12 col-lg-4">
                <q-card>
                    <q-card-section class="title">Lorem, ipsum.</q-card-section>
                    <q-card-section>
                        <div>Email: {{ accountStore.state.email }}</div>
                        <div>Name: {{ accountStore.state.fullname }}</div>
                        <div>Created at: {{ accountStore.state.createdAt }}</div>
                    </q-card-section>
                </q-card>
            </div>

            <div class="col-12 col-lg-4">
                <q-card>
                    <q-card-section class="title">Lorem, ipsum.</q-card-section>
                    <q-card-section>
                        <div>Email: {{ accountStore.state.email }}</div>
                        <div>Name: {{ accountStore.state.fullname }}</div>
                        <div>Created at: {{ accountStore.state.createdAt }}</div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </AppPage>
</template>

<script setup lang="ts">
import { useAccountStore } from '@/stores/account';
import AppPage from '@/components/AppPage.vue';
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue';

const accountStore = useAccountStore();
</script>
