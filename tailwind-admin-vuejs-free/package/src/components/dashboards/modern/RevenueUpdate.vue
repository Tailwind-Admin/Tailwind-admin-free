<script setup lang="ts">
import { ref, computed, } from 'vue'
import VueApexCharts from 'vue3-apexcharts'


import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from '@/components/ui/select/index'



import Card from '@/components/ui/card/Card.vue'


const selectedYear = ref('Year 2025')

interface SeriesData {
  name: string
  data: number[]
}

interface ChartByYear {
  series: SeriesData[]
  xaxis: { categories: string[] }
}

const chartDataByMonth: Record<string, ChartByYear> = {
  'Year 2025': {
    series: [
      { name: "Earnings", data: [1500, 2700, 2200, 3000, 1500, 1000, 1400, 2400, 1900, 2300, 1400, 1100] },
      { name: "Expense", data: [-1800, -1100, -2500, -1500, -600, -1800, -1200, -2300, -1900, -2300, -1200, -2500] },
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
  },
  'Year 2024': {
    series: [
      { name: "Earnings", data: [2000, 2500, 2800, 3000, 2000, 1500, 2300, 1500, 1000, 1400, 2400, 1900] },
      { name: "Expense", data: [-1200, -1500, -2000, -1000, -800, -1300, -1500, -600, -1800, -1200, -2300, -1900] },
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
  },
  'Year 2023': {
    series: [
      { name: "Earnings", data: [1800, 2200, 2600, 3000, 1700, 1200, 2000, 2500, 2800, 1800, 2000, 1500] },
      { name: "Expense", data: [-1500, -1300, -2200, -1200, -700, -1600, -1200, -1500, -2000, -1000, -800, -1300] },
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',"Aug", "Sep", "Oct", "Nov", "Dec"],
    },
  },
}

// Base chart options
const baseChartOptions = {
  chart: {
    toolbar: { show: false },
    type: 'bar' as const,
    fontFamily: 'inherit',
    foreColor: '#adb0bb',
    height: 310,
    stacked: true,

    offsetX: -20,
    animations: {
      enabled: true,
      easing: 'easeinout' as const,
      speed: 800,
      animateGradually: { enabled: true, delay: 150 },
      dynamicAnimation: { enabled: true, speed: 800 },
    },
  },
  colors: ['var(--color-primary)', 'var(--color-secondary)'],
  plotOptions: {
    bar: {
      horizontal: false,
      barHeight: '60%',
      columnWidth: '20%',
      borderRadius: 6,
      borderRadiusApplication: 'end',
      borderRadiusWhenStacked: 'all',
    },
  },
  dataLabels: { enabled: false },
  legend: { show: false },
  grid: {
    borderColor: 'rgba(0,0,0,0.1)',
    strokeDashArray: 3,
  },
  yaxis: {
    min: -3000,
    max: 3000,
    labels: {
      formatter: (val: number) => {
        return `${val / 1000}k`
      },
    },
  },
  tooltip: {
    theme: 'dark',
    y: {
      formatter: (val: number) => {
        return `${(val / 1000).toFixed(1)}k`
      },
    },
  },
}


const chartOptions = computed(() => {
  const byYear = chartDataByMonth[selectedYear.value]
  return {
    ...baseChartOptions,
    xaxis: {
      ...byYear.xaxis,
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
  }
})

const chartSeries = computed(() => chartDataByMonth[selectedYear.value].series)
</script>

<template>
  <Card>
    <div class="sm:flex justify-between mb-6 h-full">
      <div>
        <h5 class="card-title">Revenue Updates</h5>
        <p class="card-subtitle mb-5">Overview of profit</p>
      </div>
      <div class="mt-4 sm:mt-0">
        <Select v-model="selectedYear">
          <SelectTrigger>
            <SelectValue placeholder="Select a Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Year 2025">Year 2025</SelectItem>
              <SelectItem value="Year 2024">Year 2024</SelectItem>
              <SelectItem value="Year 2023">Year 2023</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>

    <VueApexCharts type="bar" :options="chartOptions" :series="chartSeries" height="316" width="100%" />


  </Card>
</template>
