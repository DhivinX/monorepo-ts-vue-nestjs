<template>
    <q-input
        :name="props.name"
        v-model="value"
        :error-message="!!fieldError ? fieldError : props.errorMessage"
        :error="!!fieldError || props.error"
        hide-bottom-space
    />
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useField } from 'vee-validate';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps({
    name: {
        type: String,
        required: true,
    },

    errorMessage: {
        type: String,
        default: null,
    },

    error: {
        type: Boolean,
        default: false,
    },

    untranslatable: {
        type: Boolean,
        default: false,
    },
});

const { errorMessage, value } = useField<string>(props.name);

const fieldError = computed<string | undefined>(() => {
    const error: any = errorMessage.value;

    if (error && !props.untranslatable) {
        if (error.k) return t(`validation.${error.k}`, error.v);
        else return t(`validation.${error}`);
    }

    return error;
});
</script>
