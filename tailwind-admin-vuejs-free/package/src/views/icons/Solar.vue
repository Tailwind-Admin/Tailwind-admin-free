<script setup lang="ts">
import { ref } from "vue";
// common components
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import Card from "@/components/ui/card/Card.vue";

// template breadcrumb
const page = ref({ title: "Iconify Solar Icons" });
const breadcrumbs = ref([
  {
    text: "Iconify Solar Icons",
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
  <Card>
    <iframe
      src="https://icon-sets.iconify.design/solar/"
      title="Inline Frame Example"
      frameborder="0"
      width="100%"
      height="650"
    ></iframe>
  </Card>
</template>
