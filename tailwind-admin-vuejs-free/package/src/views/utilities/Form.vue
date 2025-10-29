<script setup lang="tsx">
import Form from '@/components/utilities/Form.vue';
import { ref } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';


const page = ref({ title: " Table " });
const breadcrumbs = ref([
  {
    text: "Table",
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
  <Form/>
</template>