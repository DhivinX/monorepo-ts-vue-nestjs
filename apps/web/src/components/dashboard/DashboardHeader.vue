<template>
    <div class="full-width bg-white border-bottom-accent">
        <div class="container">
            <h4 class="q-my-none q-mt-lg text-weight-bold">
                {{ $t('dashboard.welcome', { name: accountStore.state.firstName }) }}
            </h4>
            <p class="q-mb-none q-mb-lg">You have 2 new messages and 15 new tasks</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAccountStore } from '@/stores/account';
const accountStore = useAccountStore();
</script>
