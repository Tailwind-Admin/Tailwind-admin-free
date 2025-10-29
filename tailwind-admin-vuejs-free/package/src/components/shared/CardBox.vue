<template>
  <Card :class="[
    'card no-inset no-ring shadow-none border border-ld rounded-lg w-full',
    customClass
  ]">
    <slot />
  </Card>
</template>

<script lang="ts" setup>
import {Card} from '@/components/ui/card'; 



const props = defineProps({
  class: String,
});

const customClass = props.class || '';
</script>
