<script setup lang="ts">
import { ref } from "vue";
// common components
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import blogDetail from "@/components/apps/blog/detail/blogDetail.vue";

// template breadcrumb
const page = ref({ title: "Blog Detail" });
const breadcrumbs = ref([
  {
    text: "Blog Detail",
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

  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12">
        <blogDetail/>
    </div>
  </div>
</template>
