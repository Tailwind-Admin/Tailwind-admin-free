<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <tr
    data-slot="table-row"
    :class="cn('border-b border-ld transition-colors data-[state=selected]:bg-neutral-100 dark:data-[state=selected]:bg-neutral-800', props.class)"
  >
    <slot />
  </tr>
</template>
