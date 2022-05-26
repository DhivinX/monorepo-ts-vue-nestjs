<template>
    <div class="row window-height">
        <div class="col login-area">
            <q-card class="login-card q-ma-sm">
                <Form
                    @submit="loginAction.execute(500)"
                    :validation-schema="authLoginSchema"
                    :initial-values="loginForm"
                >
                    <q-card-section class="text-h4 text-weight-bolder q-mb-md">
                        {{ appStore.state.routeTitle }}
                    </q-card-section>

                    <q-card-section>
                        <VInput
                            name="email"
                            v-model="loginForm.email"
                            :disable="loginAction.isLoading"
                            :error="!!loginError"
                            :label="$t('login.form.email')"
                            outlined
                            :disabled="true"
                            hide-bottom-space
                        />

                        <VInput
                            name="password"
                            type="password"
                            v-model="loginForm.password"
                            :disable="loginAction.isLoading"
                            :error="!!loginError"
                            :label="$t('login.form.password')"
                            outlined
                            class="q-mt-md"
                        />
                    </q-card-section>

                    <q-card-section class="text-center text-negative" v-if="loginError">
                        {{ loginError }}
                    </q-card-section>

                    <q-card-section class="row justify-between">
                        <q-checkbox
                            name="remember"
                            size="38px"
                            :disable="loginAction.isLoading"
                            v-model="loginForm.remember"
                            :label="$t('login.form.remember')"
                        />
                    </q-card-section>

                    <q-card-section>
                        <q-btn
                            type="submit"
                            :loading="loginAction.isLoading"
                            :disable="loginAction.isLoading"
                            color="primary"
                            class="full-width"
                            rounded
                        >
                            {{ $t('login.form.signin') }}
                        </q-btn>
                    </q-card-section>
                </Form>
            </q-card>
        </div>

        <div class="col welcome-area">
            <div class="welcome-wrapper">
                <h2 class="text-white">{{ $t('login.welcome.title') }}</h2>
                <div class="text-grey-5">{{ $t('login.welcome.description') }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.login-area {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;

    .login-card {
        width: 100%;
        max-width: 400px;
        box-shadow: none;

        @media screen and (max-width: 960px) {
            box-shadow: 0px 2px 3px -3px rgba(66, 68, 90, 0.72);
        }
    }

    @media screen and (max-width: 960px) {
        background-color: #f1f5f9;
    }
}

.welcome-area {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1e293b;

    .welcome-wrapper {
        text-align: left;
        width: 100%;
        max-width: 600px;

        h2 {
            font-size: 55px;
            margin-top: 0;
            font-weight: 500;
        }

        @media screen and (max-width: 1400px) {
            max-width: 500px;
        }

        @media screen and (max-width: 1300px) {
            max-width: 350px;

            h2 {
                font-size: 45px;
            }
        }
    }

    @media screen and (max-width: 960px) {
        display: none;
    }
}
</style>

<script setup lang="ts">
import { computed, reactive } from '@vue/reactivity';
import { Form } from 'vee-validate';
import { usePromiseState, api, type ResponseError } from '@/common';
import { type AuthLoginDto, authLoginSchema } from '@monorepo-ts-vue-nestjs/shared';
import { useRouter } from 'vue-router';
import VInput from '@/components/form/VInput.vue';
import { useI18n } from 'vue-i18n';
import { watch } from 'vue';
import { useAccountStore } from '@/stores/account';
import { useAppStore } from '@/stores/app';

const appStore = useAppStore();
const accountStore = useAccountStore();
const router = useRouter();
const { t } = useI18n();

const loginForm = reactive<AuthLoginDto>({
    email: 'admin@admin.com',
    password: '123456',
    remember: true,
});

const loginAction = usePromiseState<void, ResponseError>(async () => {
    const res = await api.auth.login(loginForm);
    accountStore.setAuthenticated(true, res.data.expirationTime);
    router.push({ name: 'dashboard' });
});

const loginError = computed<string>(() => {
    if (loginAction.error && loginAction.error.response.status === 401)
        return t('login.form.errors.no_authorization');

    return undefined;
});

watch(loginForm, () => {
    loginAction.error = undefined;
});
</script>
