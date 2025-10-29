
<script setup lang="tsx">

import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import { ref } from 'vue';
import { PerformersData } from '@/_mockApis/dashboardData/modernData';
import CardBox from "@/components/shared/CardBox.vue"
import { Icon } from '@iconify/vue'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge/index'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'


const tableActionData = [
  {
    icon: 'solar:add-circle-outline',
    listtitle: 'Add'
  },
  {
    icon: 'solar:pen-new-square-broken',
    listtitle: 'Edit'
  },
  {
    icon: 'solar:trash-bin-minimalistic-outline',
    listtitle: 'Delete'
  }
]


const page = ref({ title: " Table " });
const breadcrumbs = ref([
  {
    text: "Table",
    disabled: true,
    href: "#",
  },
]);

</script>
<template>

 <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
  <CardBox>
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead class="text-sm font-semibold ps-0">Assigned</TableHead>
                    <TableHead class="text-sm font-semibold">Project</TableHead>
                    <TableHead class="text-sm font-semibold">Priority</TableHead>
                    <TableHead class="text-sm font-semibold"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <template v-for="(item) in PerformersData" :key="item.key">
                    <TableRow class="border-b border-ld">
                      <!-- Assigned -->
                      <TableCell class="ps-0 min-w-[200px]">
                        <div class="flex gap-3 items-center">
                          <img
                            :src="item.profileImg"
                            alt="profile"
                            class="h-10 w-10 rounded-full"
                          />
                          <div>
                            <h6 class="text-sm font-semibold mb-1">{{ item.username }}</h6>
                            <p class="text-xs text-darklink font-medium">{{ item.designation }}</p>
                          </div>
                        </div>
                      </TableCell>

                      <!-- Project -->
                      <TableCell>
                        <p class="text-charcoal text-sm font-medium">{{ item.project }}</p>
                      </TableCell>

                      <!-- Priority -->
                      <TableCell>
                        <Badge
                         class="text-sm rounded-full py-1 px-3 justify-center"
                         :variant="item.color as 'primary' | 'secondary' | 'error' | 'success' | 'default' | 'destructive' | 'warning' | 'info'"
                          
                        >
                          {{ item.priority }}
                        </Badge>
                      </TableCell>

                      <!-- Actions Dropdown -->
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <span
                              class="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer"
                            >
                              <Icon icon="mdi:dots-vertical" width="22" height="22" />
                            </span>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" class="w-40">
                            <template v-for="(action) in tableActionData" :key="idx">
                              <DropdownMenuItem class="flex gap-3 items-center">
                                <Icon :icon="action.icon" height="18" />
                                <span>{{ action.listtitle }}</span>
                              </DropdownMenuItem>
                            </template>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </template>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </CardBox>

</template>