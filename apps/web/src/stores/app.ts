import { computed, reactive } from '@vue/reactivity';
import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

interface State {
    networkError: boolean;
    routeTitle: string;
}

export const useAppStore = defineStore('app', () => {
    const router = useRouter();
    const { t } = useI18n();

    const state: State = reactive({
        networkError: false,

        routeTitle: computed(() => {
            return t(`routes.${router.currentRoute.value.name.toString()}`);
        }),
    });

    return { state };
});
