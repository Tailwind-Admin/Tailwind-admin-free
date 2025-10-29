
<script setup lang="ts">
import { ref } from 'vue'
import { Card } from '@/components/ui/card'  

import {Icon} from '@iconify/vue'  
import  VueApexCharts from 'vue3-apexcharts'
import type { ApexOptions } from 'apexcharts'

const chartSeries = ref([
  {
    name: 'monthly earnings',
    color: 'var(--color-secondary)',
    data: [25, 66, 20, 40, 12, 58, 20],
  },
])

const chartOptions = ref<ApexOptions>({
  chart: {
    id: 'weekly-stats2',
    type: 'area',
    height: 120,
    sparkline: {
      enabled: true,
    },
    group: 'sparklines',
    fontFamily: 'inherit',
    foreColor: '#adb0bb',
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 0,
      inverseColors: false,
      opacityFrom: 0.1,
      opacityTo: 0,
      stops: [20, 180],
    },
  },
  markers: {
    size: 0,
  },
  tooltip: {
    theme: 'dark',
    fixed: {
      enabled: true,
      position: 'right',
    },
    x: {
      show: false,
    },
    y: {
      formatter: function (value: number) {
        return `$${value.toLocaleString()}K`
      },
    },
  },
})
</script>



<template>
  <Card class="p-0 h-full">
    <div class="p-6">
      <div class="grid grid-cols-12 gap-6">
        <div class="lg:col-span-8 md:col-span-8 col-span-8">
          <h5 class="card-title mb-4">Monthly Earnings</h5>
          <h4 class="text-xl mb-3">
            $6820 
          </h4>
          <div class="flex items-center mb-3 gap-2">
            <span
              class="rounded-full p-1 bg-lighterror dark:bg-darkerror flex items-center justify-center"
            >
              <Icon icon="tabler:arrow-down-right" class="text-error" />
            </span>
            <p class="text-dark dark:text-darklink mb-0">+9%</p>
            <p class="dark:text-darklink mb-0">last year</p>
          </div>
        </div>
        <div class="lg:col-span-4 md:col-span-4 col-span-4">
          <div class="flex justify-end">
            <div
              class="text-white bg-secondary rounded-full h-11 w-11 flex items-center justify-center"
            >
              <Icon icon="tabler:currency-dollar" class="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <VueApexCharts
        height="60"
        width="100%"
        type="area"
        :options="chartOptions"
        :series="chartSeries"
      />
    </div>
  </Card>
</template>