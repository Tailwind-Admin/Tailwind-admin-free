<script setup lang="ts">

</script>
<template>


  <div class="flex h-[calc(100vh-280px)] w-full overflow-hidden">
    <!-- Sidebar -->
    <div class="w-80 border-e border-ld shrink-0 lg:block hidden">
      <slot name="leftpart"></slot>
    </div>
    <!-- Main Content -->
    <div class="w-full relative flex flex-col h-full overflow-hidden">
      <slot name="rightpart"></slot>
    </div>
  </div>
</template>
