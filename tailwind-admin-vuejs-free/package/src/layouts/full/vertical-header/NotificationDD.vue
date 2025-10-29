<script setup lang="ts">

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@/components/ui/dropdown-menu';
import SimpleBar  from 'simplebar-vue'
import { notifications } from '../../../_mockApis/headerData';
import { Icon } from '@iconify/vue';
</script>

<template>
  <div  class="relative group/menu px-4 ">
    <!-- Dropdown Trigger -->
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <div class="relative">
          <span
            class="relative after:absolute after:w-10 after:h-10 after:rounded-full hover:text-primary after:-top-1/2 hover:after:bg-lightprimary text-link dark:text-darklink rounded-full flex justify-center items-center cursor-pointer group-hover/menu:after:bg-lightprimary group-hover/menu:text-primary"
          >
            <Icon icon="tabler:bell-ringing" height="20" />
          </span>
          <span class="absolute -top-[5px] -end-[6px] h-2 w-2 bg-primary rounded-full"></span>
        </div>
      </DropdownMenuTrigger>

      <!-- Dropdown Content -->
      <DropdownMenuContent class="w-screen sm:w-[300px] py-6 rounded-md shadow-lg z-50 ">
        <!-- Header -->
        <div class="flex items-center px-6 justify-between  rtl:flex-row-reverse rtl:text-end">
          <h3 class="text-lg font-semibold text-ld ">Notifications</h3>
         
        </div>

        <!-- Scrollable Items -->
        <SimpleBar class="max-h-80 mt-3">
          <div>
            <div
              v-for="(item, index) in notifications"
              :key="index"
              class="rtl:flex-row-reverse rtl:text-end   px-6 py-3 flex justify-between items-center bg-hover group/link w-full cursor-pointer hover:bg-lightprimary"
            >
               <div class="flex items-center">
                <div class="ps-0">
                  <h5 class="mb-1 text-sm  group-hover/link:text-primary">
                   {{item.title}}
                  </h5>
                  <span class="text-xs block  truncate text-darklink">
                    {{item.subtitle}}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SimpleBar>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
