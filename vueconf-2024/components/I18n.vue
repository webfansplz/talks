<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
const { t, locale } = useI18n()

async function toggleLocales() {
  locale.value = locale.value === 'en' ? 'zh-CN' : 'en'
}
</script>

<template>
  <nav flex="~" mt--2 justify-center items-center text-xl flex-col>
    <p>{{ t('hi') }}</p>
    <p op70>{{ t('desc') }}</p>
    <span i-carbon-language @click="toggleLocales()" class="hover:(op80 cursor-pointer)" />
  </nav>
</template>
