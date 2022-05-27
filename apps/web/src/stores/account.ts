import { defineStore } from 'pinia';
import { useCookies } from '@vueuse/integrations/useCookies';
import { computed, reactive } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import type { UserProfileResponse } from '@monorepo-ts-vue-nestjs/shared';

interface State {
    authenticated: boolean;
    loaded: boolean;

    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
    createdAt: Date | null;

    fullname: string;
}

export const useAccountStore = defineStore('account', () => {
    const cookies = useCookies(['token_exp']);
    const router = useRouter();
    const $q = useQuasar();
    const { t } = useI18n();

    const initialState = {
        loaded: false,
        email: '',
        avatar: '',
        firstName: '',
        lastName: '',
        createdAt: null,
    };

    const state: State = reactive({
        authenticated: false,
        ...initialState,

        fullname: computed(() => {
            return `${state.firstName} ${state.lastName}`;
        }),
    });

    function reset() {
        for (const [key, value] of Object.entries(initialState)) {
            state[key] = value;
        }
    }

    function load(data: UserProfileResponse) {
        state.loaded = true;
        state.email = data.email;
        state.firstName = data.firstName;
        state.lastName = data.lastName;
        state.avatar = data.avatar;
        state.createdAt = new Date(data.createdAt);
    }

    function checkAuthCookie(): void {
        if (state.authenticated) return;
        const tokenExpiration = cookies.get<number>('token_exp');

        if (tokenExpiration) {
            if (tokenExpiration - Date.now() > 0) {
                setAuthenticated(true);
            } else {
                cookies.remove('token_exp');

                $q.notify({
                    icon: 'mdi-cookie',
                    message: t('account.session_exp'),
                    timeout: 2000,
                });
            }
        }
    }

    function setAuthenticated(authState: boolean, expirationTime?: number) {
        state.authenticated = authState;

        if (authState) {
            if (expirationTime !== undefined) cookies.set('token_exp', expirationTime);
        } else {
            reset();
            cookies.remove('token_exp');
            router.push({ name: 'login' });
        }
    }

    return { state, checkAuthCookie, setAuthenticated, load, reset };
});
