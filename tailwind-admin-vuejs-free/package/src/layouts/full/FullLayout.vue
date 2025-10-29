<script setup lang="ts">
import { SidebarProvider } from "@/components/ui/sidebar";


import LayoutVerticalSidebar from "./vertical-sidebar/VerticalSidebar.vue";

import LayoutVerticalHeader from "./vertical-header/VerticalHeader.vue";








</script>

<template>

  <SidebarProvider>
    <div class="flex w-full min-h-screen">

      <div class="flex ">
        <LayoutVerticalSidebar />
      </div>


      <!-- Main content wrapper -->
      <div class=" w-full  bg-white dark:bg-dark">
        <LayoutVerticalHeader />
        <!-- Page content -->
        <main class="flex-grow">
          <div class="
              container mx-auto py-[30px] px-6
          ">
            <RouterView />
          </div>
        </main>
      </div>
    </div>
  </SidebarProvider>

</template>
