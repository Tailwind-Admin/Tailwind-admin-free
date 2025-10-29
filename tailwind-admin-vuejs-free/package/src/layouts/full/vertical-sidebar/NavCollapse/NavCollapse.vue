<script setup lang="ts">
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Icon } from "@iconify/vue";
import {  useRoute } from 'vue-router';
import { computed, ref, watch } from 'vue';
import LayoutVerticalSidebarNavCollapse from './NavCollapse.vue'


const props = defineProps<{ item: any; level?: number }>();

const { item } = props;
const route = useRoute();



const isActiveGroup = computed(() =>
  props.item.children?.some((child: any) =>
    route.path.startsWith(child.to)
  )
);



const isOpen = ref(isActiveGroup.value);

watch(isActiveGroup, (val) => {
  isOpen.value = val;
});


function handleClick(e: MouseEvent, linkItem: any) {
  if (linkItem.isPro) {
    e.preventDefault();
    window.open(linkItem.to, '_blank', 'noopener,noreferrer');
  }
}

</script>
<template>

  <Collapsible class="collapse-menu group/collapsible " v-model:open="isOpen">
    <SidebarMenuItem>
      <CollapsibleTrigger asChild>
        <SidebarMenuButton
          class=" flex items-center justify-between w-full px-4 py-2 cursor-pointer  transition-all duration-200 ease-in-out hover:translate-x-1  "
          :class="isActiveGroup ? 'bg-primary text-white' : 'text-link dark:text-darklink'">
          <div class="flex gap-3 items-center">
            <Icon :icon="'solar:' + item.icon" class="w-5 h-5" />
            <span class=" navtitle whitespace-nowrap leading-5 ">{{ item.title }}</span>
          </div>


          <Icon icon="solar:alt-arrow-down-line-duotone" class="!h-4 !w-4 ms-auto transition-transform duration-300"
            :class="{ 'rotate-180': isOpen }" />
        </SidebarMenuButton>
      </CollapsibleTrigger>

      <CollapsibleContent class="collapse-content mt-1 transition-all duration-300 ease-in-out">
        <SidebarMenuSub class="flex flex-col px-0 ">
          <template v-for="(child, index) in item.children" :key="index">
            <SidebarMenuSubItem v-if="!child.children" asChild
              class="w-full  transition-all duration-200 ease-in-out hover:translate-x-1">
              <a   @click="(e) => handleClick(e, child)"  :href="child.to" class="flex text-sm items-center gap-5 w-full whitespace-nowrap" :class="{
                'text-primary font-semibold': route.path === child.to,
                'text-link dark:text-darklink': route.path !== child.to
              }">
                <span class="  size-2 rounded-full  bg-transparent border border-dark dark:border-darklink dot"></span>
                {{ child.title }}

                <span v-if="child.isPro"
                class="ml-auto py-1 px-2.5 text-[10px] bg-lightsecondary text-secondary rounded-full leading-none">
                Pro
              </span>
            </a>

              
            </SidebarMenuSubItem>

            <LayoutVerticalSidebarNavCollapse v-else :item="child" :level="(props.level || 0) + 1" />
          </template>
        </SidebarMenuSub>
      </CollapsibleContent>
    </SidebarMenuItem>
  </Collapsible>
</template>
