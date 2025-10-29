<script setup lang="ts">
import { ref } from "vue";
// common components
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import TicketList from '@/components/apps/tickets/TicketList.vue'
// template breadcrumb
const page = ref({ title: "Tickets App" });
const breadcrumbs = ref([
  {
    text: "Tickets App",
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
  <TicketList/>
</template>
