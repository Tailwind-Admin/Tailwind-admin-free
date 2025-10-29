<script lang="ts" setup>
import { Card } from '@/components/ui/card/index'
import { RecentTransaction } from '@/_mockApis/dashboardData/modernData'



</script>

<template>
  <Card class="h-full">
    <div class="flex flex-col gap-1.5">
      <h5 class="card-title">Recent Transactions</h5>
      <p class="card-subtitle">How to secure recent transactions</p>
    </div>

    <div class="mt-6">
      <div class="flex flex-col gap-6">
        <div v-for="(item, index) in RecentTransaction" :key="item.key" :index="index">
          <div class="flex gap-x-3">
            <div class="w-1/4 text-end">
              <span>{{ item.time }}</span>
            </div>

            <div :class="[
              'relative',
              item.isLastItem ? 'after:hidden' : '',
              'after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-border dark:after:bg-darkborder',
            ]">
              <div class="relative z-[1] w-7 h-7 flex justify-center items-center">
                <div :class="[
                  'h-3 w-3 rounded-full bg-transparent border-2',
                  item.borderColor,
                ]"></div>
              </div>
            </div>

            <div class="w-1/4 grow">
              <template v-if="!item.isSale">
                <p>{{ item.desc }}</p>
              </template>
              <template v-else>
                <div>
                  <h6>New sale recorded</h6>
                  <RouterLink to="#" class="text-primary">#ML-3467</RouterLink>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>
