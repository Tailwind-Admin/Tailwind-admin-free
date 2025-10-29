<script setup lang="ts">
import { ref } from "vue";
// common components
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import blogPosts from "@/components/apps/blog/blogPosts.vue";
// template breadcrumb
const page = ref({ title: "Blog App" });
const breadcrumbs = ref([
  {
    text: "Get the latest news",
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
        <blogPosts/>
    </div>
  </div>
</template>
