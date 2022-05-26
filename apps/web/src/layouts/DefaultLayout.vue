<template>
    <q-layout view="hHh lpR lFr">
        <AppNetworkError class="fixed-top" />
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import AppNetworkError from '@/components/AppNetworkError.vue';
</script>
