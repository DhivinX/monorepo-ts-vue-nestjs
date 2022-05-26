<template>
    <q-drawer show-if-above side="left" class="app-drawer">
        <q-scroll-area class="fit">
            <div class="logo-area">Admin Panel</div>

            <div class="account-area">
                <div class="text-center">
                    <q-avatar size="90px">
                        <img :src="accountStore.state.avatar" :alt="accountStore.state.fullname" />
                    </q-avatar>

                    <div class="fullname">{{ accountStore.state.fullname }}</div>
                    <div class="email">{{ accountStore.state.email }}</div>
                </div>
            </div>

            <q-list padding>
                <div class="menu-title">
                    <div class="title">Sections</div>
                    <div class="caption">All core functions of the application</div>
                </div>

                <q-item :active="route.name === 'dashboard'" clickable>
                    <q-item-section avatar>
                        <q-icon name="mdi-chart-box-outline" />
                    </q-item-section>

                    <q-item-section>{{ routeTitle('dashboard') }}</q-item-section>
                </q-item>

                <q-item clickable>
                    <q-item-section avatar>
                        <q-icon name="inbox" />
                    </q-item-section>

                    <q-item-section>First option</q-item-section>
                </q-item>

                <q-item clickable>
                    <q-item-section avatar>
                        <q-icon name="inbox" />
                    </q-item-section>

                    <q-item-section>Second option</q-item-section>
                </q-item>

                <q-item clickable>
                    <q-item-section avatar>
                        <q-icon name="inbox" />
                    </q-item-section>

                    <q-item-section>Another option</q-item-section>
                </q-item>
            </q-list>

            <q-list padding>
                <div class="menu-title">
                    <div class="title">Account</div>
                    <div class="caption">All account functions</div>
                </div>

                <q-item clickable>
                    <q-item-section avatar>
                        <q-icon name="mdi-cog" />
                    </q-item-section>

                    <q-item-section>Settings</q-item-section>
                </q-item>

                <q-item clickable>
                    <q-item-section avatar>
                        <q-icon name="mdi-logout-variant" />
                    </q-item-section>

                    <q-item-section>Sign out</q-item-section>
                </q-item>
            </q-list>
        </q-scroll-area>
    </q-drawer>
</template>

<style scoped lang="scss">
.logo-area {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72px;
    font-size: 20px;
    font-weight: 500;
    background-color: #0d121d;
}

.account-area {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;

    .fullname {
        margin-top: 15px;
        font-weight: 500;
    }

    .email {
        font-weight: 300;
        font-size: 12px;
        color: #83a3ab;
    }
}

.scroll-area {
    height: 100%;
}

.q-item {
    margin: 0px 15px 5px 15px;
    border-radius: 10px;
    color: #9dbabf;

    &.q-router-link--active {
        color: #ffffff;
        background-color: #1a253c;
    }

    &:hover {
        color: #b9b7dc;
        background-color: #070d1d;
    }
}

.menu-title {
    margin: 0px 30px 10px 30px;

    .title {
        color: #728cf8;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 14px;
    }

    .caption {
        font-size: 13px;
        font-weight: 300;
        color: #6f7586;
    }
}
</style>

<script setup lang="ts">
import { useAccountStore } from '@/stores/account';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const accountStore = useAccountStore();
const route = useRoute();
const { t } = useI18n();

function routeTitle(name: string): string {
    return t(`routes.${name}`);
}
</script>
