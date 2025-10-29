<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { useVModel } from "@vueuse/core"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  defaultValue?: string | number
  modelValue?: string | number
}>()

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void
}>()

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <textarea
    v-model="modelValue"
    data-slot="textarea"
    :class="cn('flex min-h-[80px] w-full rounded-lg border border-ld focus:border-primary dark:focus:border-primary bg-transparent px-3 py-2 ring-offset-background placeholder:text-bodytext dark:placeholder:text-white/30 disabled:cursor-not-allowed disabled:opacity-50 text-ld text-sm focus:ring-0 focus-visible:outline-0 focus-visible:border-primary dark:focus-visible:border-primary focus-visible:ring-0', props.class)"
  />
</template>
