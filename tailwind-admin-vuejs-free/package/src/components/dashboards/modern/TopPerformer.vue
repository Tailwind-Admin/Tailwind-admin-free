<template>
  <Card class="h-full w-full">
    <div class="flex flex-col gap-6">
      <!-- Header + Search -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h5 class="card-title">Product Performance</h5>

        </div>

      </div>

      <!-- Table -->
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead class="text-sm font-semibold">

                      Id


                    </TableHead>
                    <TableHead class="text-sm font-semibold">

                      Assigned


                    </TableHead>
                    <TableHead class="text-sm font-semibold">

                      Name


                    </TableHead>
                    <TableHead class="text-sm font-semibold">

                      Priority


                    </TableHead>
                    <TableHead class="text-sm font-semibold min-w-28">

                      Budget


                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody class="divide-y divide-border dark:divide-darkborder">
                  <TableRow v-for="(item, idx) in PerformersData" :key="item.key ?? idx">
                     <TableCell>
                   
                    
                          <h6 class="text-xs font-semibold dark:text-darklink">
                            {{ idx+1 }}
                          </h6>
                       
                      
                    </TableCell>
                    <TableCell>
                   
                        
                        <div>
                          <h6 class="text-sm font-semibold mb-1">{{ item.username }}</h6>
                          <p class="text-xs font-medium text-bodytext dark:text-darklink">
                            {{ item.designation }}
                          </p>
                        </div>
                      
                    </TableCell>
                    <TableCell >
                      <p class=" text-darklink text-sm w-fit font-medium">
                        {{ item.project }}
                      </p>
                    </TableCell>
                    <TableCell >
                      <Badge :variant="item.color" class="text-sm">
                        {{ item.priority }}
                      </Badge>
                    </TableCell>
                    <TableCell >
                      <p class="dark:text-darklink text-link text-sm font-medium">
                        {{ item.budget }}k
                      </p>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup>

import { Icon } from '@iconify/vue';

import { Card } from '@/components/ui/card/index'
import { Badge } from '@/components/ui/badge/index';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { PerformersData } from '../../../_mockApis/dashboardData/modernData'




</script>
