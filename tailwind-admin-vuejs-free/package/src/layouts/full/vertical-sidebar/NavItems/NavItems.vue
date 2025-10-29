<script setup lang="ts">

import { SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";

import { Icon } from "@iconify/vue";


import { useRoute } from "vue-router";


import { Badge } from "@/components/ui/badge";
import { computed } from "vue";
  








const props = defineProps<{ item: any }>();

const { item } = props;

function handleClick(e: MouseEvent) {
  if (item.isPro) {
    e.preventDefault();
    window.open(item.to, '_blank', 'noopener,noreferrer');
  }
}

const route = useRoute();
const isActive = computed(() => {
  return route.path === item.to;
});

</script>



<template>

  <SidebarMenuItem v-if="!item.children">

    <SidebarMenuButton

      asChild

      class="transition-all duration-200 ease-in-out hover:translate-x-1  "

    >

   <a
@click="handleClick"
   :href="item.to"
 

  class="flex items-center w-full px-4 py-2  text-link dark:text-darklink "

  :class="[
   isActive ? 'router-link-active' : '',
    item.disabled

      ? 'opacity-50 !cursor-not-allowed'

      : 'hover:bg-lightprimary hover:text-primary cursor-pointer ',

  ]"
     :target="item.isPro ? '_blank' : undefined"
>

  <!-- Left side: icon + text -->

  <div class="flex items-center gap-3 flex-1 min-w-0">

    <!-- Icon -->

    <div class="flex items-center justify-center shrink-0">

      <Icon :icon="'solar:' + item.icon" height="21" width="21" />

    </div>



    <!-- Title + Subtitle block -->

    <div class="flex flex-col min-w-0">

      <span class="text-sm leading-5 truncate">{{ item.title }}</span>

      <span

        v-if="item.subCaption"

        class="text-xs text-muted leading-tight truncate"

      >

        {{ item.subCaption }}

      </span>

    </div>

  </div>



  <!-- Right side: Badge -->
<span
  v-if="item.isPro"
  class="ml-auto py-1 px-2.5 text-[10px] bg-lightsecondary text-secondary rounded-full leading-none"
>
  Pro
</span>
  <Badge

    v-if="item.chip"
    :variant="item.chipVariant || 'default'"
 class="ml-5 rtl:mr-5"
  >

    {{ item.chip }}

  </Badge>



</a>

    </SidebarMenuButton>

  </SidebarMenuItem>

</template>

