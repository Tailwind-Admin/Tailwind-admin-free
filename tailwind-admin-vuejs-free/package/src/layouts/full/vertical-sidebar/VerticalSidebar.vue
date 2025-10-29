<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,

  SidebarMenu,
} from "@/components/ui/sidebar";
import sidebarItems from "./sidebarItems";

import simplebar from "simplebar-vue";

import LayoutVerticalSidebarNavGroup from "./NavGroup/NavGroup.vue";
import LayoutVerticalSidebarNavCollapse from "./NavCollapse/NavCollapse.vue";
import LayoutVerticalSidebarNavItems from "./NavItems/NavItems.vue";

import LayoutLogo from "../logo/Logo.vue";

import Button from "@/components/ui/button/Button.vue";
import rocket from '@/assets/images/backgrounds/rocket.png'


const isHovered = ref(false);
onMounted(() => {
  const wrapper = document.querySelector(".sidebar-wrapper");
  const sidebar = document.querySelector('[data-slot="sidebar"]');

  if (!wrapper || !sidebar) return;

  let wasExpandedByHover = false;

  wrapper.addEventListener("mouseenter", () => {
    if (sidebar.getAttribute("data-state") === "collapsed") {
      sidebar.setAttribute("data-state", "expanded");
      sidebar.removeAttribute("data-collapsible");
      wasExpandedByHover = true;
      isHovered.value = true;
    }
  });

  wrapper.addEventListener("mouseleave", () => {
    if (wasExpandedByHover) {
      sidebar.setAttribute("data-state", "collapsed");
      sidebar.setAttribute("data-collapsible", "icon");
      wasExpandedByHover = false;
      isHovered.value = false;
    }
  });


});





</script>

<template>
  <Sidebar
    data-slot="sidebar"
    collapsible="icon"
    class="sidebar  bg-card pb-6"
    :class="{ 'shadow-sm z-[41] fixed': isHovered }"
    side= "left"
   
  >
    <!-- Brand Logo -->
    <SidebarHeader class="pt-6 pb-5 relative whitespace-nowrap">
      <LayoutLogo />
    </SidebarHeader>

    <!-- Sidebar Content -->
    <SidebarContent class="overflow-hidden">
      <simplebar class="h-[calc(100vh_-_100px)]">
        <SidebarMenu>
          <!---Menu Loop -->
          <template v-for="item in sidebarItems" :key="item.title">
            <!--If Has Caption-->
            <LayoutVerticalSidebarNavGroup
              v-if="item.header"
              :item="item"
            />
            <!---If Has Child -->
            <LayoutVerticalSidebarNavCollapse
              :item="item"
              :level="0"
              v-else-if="item.children"
            />

            <LayoutVerticalSidebarNavItems v-else :item="item" />
          </template>
          <!---Menu Loop End-->
        </SidebarMenu>
          <div class="mt-9 px-6 overflow-hidden">
                <div class="flex w-full bg-lightprimary rounded-lg p-6">
                  <div class="lg:w-1/2 w-full">
                    <h5 class="text-base text-charcoal">
                      Haven't Account?
                    </h5>
                    <Button color="primary"  size="sm"   as="a" target="_blank" href="https://tailwind-admin.com/#pricing" class="whitespace-nowrap mt-2 text-[13px]">Get Pro</Button>
                  </div>
                  <div class="lg:w-1/2 w-full -mt-4 ml-[26px] scale-[1.2] shrink-0">
                    <img :src="rocket" alt="rocket" />
                  </div>
                </div>
              </div>
      </simplebar>
    </SidebarContent>
  </Sidebar>
</template>
