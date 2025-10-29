<script setup lang="ts">
import type { HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSidebar } from "./utils";
import { Icon } from "@iconify/vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

const { toggleSidebar } = useSidebar();
</script>

<template>
  <Button
    data-sidebar="trigger"
    data-slot="sidebar-trigger"
    variant="ghost"
    size="icon"
    :class="cn('h-10 w-10 text-muted hover:bg-lightprimary hover:text-primary dark:hover:bg-lightprimary dark:hover:text-primary rounded-full', props.class)"
    
    @click="toggleSidebar"
  >

    <Icon icon="tabler:menu-2" class="!h-5 !w-5"  />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
