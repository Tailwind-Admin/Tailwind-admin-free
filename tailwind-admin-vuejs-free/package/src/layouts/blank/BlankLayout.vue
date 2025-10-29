// ===============================|| Blank Layout ||=============================== //
<script setup lang="ts">
import { RouterView } from "vue-router";
import ScrollToTop from "@/components/shared/ScrollToTop.vue";
</script>


<template>
   <ScrollToTop>
      <RouterView />
  </ScrollToTop>
</template>
