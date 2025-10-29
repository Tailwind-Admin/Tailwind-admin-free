<script setup lang="ts">
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { Icon } from '@iconify/vue'

import Card from '@/components/ui/card/Card.vue'

// The data structure, same as React version
const chartOptions = ref({
  chart: {
    type: 'donut',
    fontFamily: 'inherit',
    foreColor: '#adb0bb',
    height: 155,
    offsetX: 18,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    pie: {
      startAngle: 0,
      endAngle: 360,
      donut: {
        size: '75%',
      },
    },
  },
  stroke: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  colors: [
    'var(--color-primary)',
    'var(--color-lightprimary)',
    'var(--color-secondary)',
  ],
  tooltip: {
    theme: 'dark',
    fillSeriesColor: false,
    y: {
      formatter: (value: number) => {
        return `$${value.toLocaleString()}K`
      },
    },
  },

})

const series = ref([38, 40, 25])
</script>

<template>
  <Card class="h-full">
    <div class="grid grid-cols-12 ">
      <!-- Left portion -->
      <div class="lg:col-span-6 md:col-span-6 col-span-8">
        <h5 class="card-title mb-4 lg:whitespace-nowrap">Yearly Breakup</h5>
        <h4 class="text-xl mb-3">
          $36358


        </h4>
        <div class="flex items-center mb-3 gap-2">
          <span class="rounded-full p-1 bg-lightsuccess dark:bg-darksuccess flex items-center justify-center">
            <Icon icon="tabler:arrow-up-left" class="text-success" />
          </span>
          <p class="text-dark dark:text-darklink mb-0">+9%</p>
          <p class="dark:text-darklink mb-0">last year</p>
        </div>
        <div class="flex gap-4 items-center mt-4">
          <div class="flex items-center">
            <Icon icon="tabler:point-filled" class="text-primary text-xl me-1" />
            <span class="text-xs dark:text-darklink">2023</span>
          </div>
          <div class="flex items-center">
            <Icon icon="tabler:point-filled" class="text-secondary text-xl me-1" />
            <span class="text-xs dark:text-darklink">2024</span>
          </div>
          <div class="flex items-center">
            <Icon icon="tabler:point-filled" class="text-lightprimary text-xl me-1" />
            <span class="text-xs dark:text-darklink">2025</span>
          </div>
        </div>
      </div>






      <div class="lg:col-span-6 md:col-span-6 col-span-4">
        <div class="w-full max-w-[300px]">
          <VueApexCharts
            :options="chartOptions"
            :series="series"
            type="donut"
          />
        </div>
      </div> 

      
    </div>
  </Card>
</template>
