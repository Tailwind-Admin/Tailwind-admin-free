<script setup lang="ts">
import { useColorMode } from '@vueuse/core';
import LogoLight from './LogoLight.vue';
import LogoDark from './LogoDark.vue';

import { onMounted, ref } from 'vue';
const mode = useColorMode(); // 'light' or 'dark'
const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <LogoDark v-if="!isMounted || mode !== 'dark'" />
  <LogoLight v-else />
</template>
