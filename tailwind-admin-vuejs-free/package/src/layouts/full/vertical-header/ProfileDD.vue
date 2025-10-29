<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { Icon } from "@iconify/vue";

import { profileDD } from "../../../_mockApis/headerData";
import SimpleBar from "simplebar-vue";

import user1 from "@/assets/images/profile/user-1.jpg";
</script>

<template>
  <div class="relative group/menu ps-4">
    <DropdownMenu>
      <!-- Trigger -->
      <DropdownMenuTrigger as-child>
        <span
          class="hover:text-primary hover:bg-lightprimary p-1  rounded-full flex justify-center items-center cursor-pointer group-hover/menu:bg-lightprimary group-hover/menu:text-primary transition"
        >
          <img
            :src="user1"
            alt="user"
            class="rounded-full w-9 h-9 object-cover"
          />
        </span>
      </DropdownMenuTrigger>

      <!-- Content -->
      <DropdownMenuContent
        class="w-screen sm:w-[200px] py-6 rounded-sm"
      >
       
        <!-- Scrollable Items -->
        <SimpleBar>
          <div>
            <RouterLink
              v-for="(item, index) in profileDD"
              :key="index"
              @click="$router.push(item.url)"
              class="px-4 py-2 flex items-center group hover:bg-lightprimary cursor-pointer"
              :to="item.url"
            >
          

               <div class="w-full ">
                <div class="ps-0 flex items-center gap-3 w-full ">
                  <Icon :icon="item.img" class="text-lg text-darklink  group-hover:text-primary" />
                  <div class="w-3/4 ">
                    <h5 class="mb-0 text-sm text-darklink group-hover:text-primary">
                      {{item.title}}
                    </h5>
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </SimpleBar>

        <!-- Logout -->
        <div class="pt-2 px-4">
          <Button variant="outline" class="w-full">
            <RouterLink to="/auth/auth1/login">Logout</RouterLink>
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
