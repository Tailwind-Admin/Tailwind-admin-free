
<script setup lang="tsx">
import UserProfile from '@/components/utilities/UserProfile.vue'
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import { ref } from 'vue';

const page = ref({ title: " User Profile " });
const breadcrumbs = ref([
  {
    text: "User Profile",
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
<UserProfile/>

</template>