<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <th
    data-slot="table-head"
    :class="cn('h-12 px-4 text-left align-middle text-base font-semibold text-ld [&:has([role=checkbox])]:pr-0', props.class)"
  >
    <slot />
  </th>
</template>
