  <script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { useVModel } from "@vueuse/core"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  'flex h-10 w-full border rounded-lg px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:rounded-sm file:text-sm file:font-medium file:text-primary file:bg-lightprimary  focus-visible:outline-0',
  {
    variants: {
      variant: {
        default:
          'border-ld bg-transparent text-ld placeholder:text-bodytext dark:placeholder:text-white/30 focus-visible:border-primary focus-visible:ring-0',
        gray: 'border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 focus-visible:ring',
        // info: 'border-cyan-500 bg-info/10   text-info  placeholder-text-info focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 focus-visible:ring',
        info: 'border-info bg-info/10 text-info placeholder-info/50 focus:border-info focus:ring-info dark:border-info dark:bg-info/10 dark:focus:border-info dark:focus:ring-border-info focus-visible:ring',

        failure:
          'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500 focus-visible:ring',
        warning:
                    'border-warning bg-warning/10 text-warning placeholder-warning/50 focus:border-warning focus:ring-warning dark:border-warning dark:bg-warning/10 dark:focus:border-warning dark:focus:ring-warning focus-visible:ring',
        success:
          // 'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500 focus-visible:ring',
          'border-success bg-success/10 text-success placeholder-success/50 focus:border-success focus:ring-success dark:border-success dark:bg-success/10 dark:focus:border-green-500 dark:focus:ring-green-500 focus-visible:ring',

      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);
export type InputVariants = VariantProps< typeof inputVariants>;

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes["class"]
  variant?: InputVariants['variant']
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
  <input
    v-model="modelValue"
    data-slot="input"
      :class="cn(inputVariants({ variant,  }), props.class)"
  >
</template> 

