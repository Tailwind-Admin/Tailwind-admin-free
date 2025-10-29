<script setup lang="ts">

import TopCards from "@/components/dashboards/modern/TopCards.vue";
import RevenueUpdate from '@/components/dashboards/modern/RevenueUpdate.vue'
import YearlyBreakup from '@/components/dashboards/modern/YearlyBreakup.vue'
import MonthlyEarning from '@/components/dashboards/modern/MonthlyEarning.vue'

import ProfileWelcome from "@/components/dashboards/modern/ProfileWelcome.vue";

import RecentTransaction from "@/components/dashboards/modern/RecentTransaction.vue";
import TopPerformer from '@/components/dashboards/modern/TopPerformer.vue'
import Footer from "@/components/dashboards/modern/Footer.vue";


</script>

<template>

  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12">
      <ProfileWelcome />
    </div>
    <div class="col-span-12">
      <TopCards />
    </div>
    <div class="lg:col-span-8 col-span-12">
      <RevenueUpdate />
    </div>
    <div class="lg:col-span-4 col-span-12">
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12">
          <YearlyBreakup />
        </div>
        <div class="col-span-12">
          <MonthlyEarning />
        </div>
      </div>
    </div>
    <div class="lg:col-span-4 col-span-12">
      <RecentTransaction />
    </div>
    <div class="lg:col-span-8 col-span-12 flex">
      <TopPerformer />
    </div>

    <div class="col-span-12">
      <Footer />
    </div>
  </div>
</template>
