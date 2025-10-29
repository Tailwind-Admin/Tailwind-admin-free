
<template>
  <div class="bg-white dark:bg-dark flex justify-center items-center px-6 py-4 xl:hidden w-full">
    <!-- Theme Toggle -->
    <!-- <ThemeToggler /> -->

    <!-- Messages Dropdown -->
    <NotificationDD />

    <!-- Profile Dropdown -->
    <ProfileDD />
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { Icon as IconifyIcon } from '@iconify/vue'

// import ThemeToggler from './ThemeToggler.vue'

import NotificationDD from './NotificationDD.vue';





import ProfileDD from './ProfileDD.vue';


</script>
