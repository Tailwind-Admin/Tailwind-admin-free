<!-- <script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { Icon } from "@iconify/vue";
import { useColorMode } from "@vueuse/core";



const mode = useColorMode();
const isMounted = ref(false);

onMounted(() => {
  mode.value = customizer.themeMode as 'light' | 'dark' | 'auto';
  isMounted.value = true;
});

watch(mode, (newVal) => {
  customizer.SET_MODE(newVal); 
});

// toggle theme
const toggleTheme = () => {
  mode.value = mode.value === "dark" ? "light" : "dark";
};
</script>

<template>
   <div
    class="  group/menu  hover:text-primary px-4 dark:hover:text-primary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-link dark:text-darklink group relative"
    @click="toggleTheme"
  >
    <span class="flex items-center justify-center relative after:absolute after:w-10 after:h-10 after:rounded-full after:-top-1/2 group-hover:after:bg-lightprimary">
   
      <Icon
        v-if="isMounted && mode === 'light'"
        icon="tabler:moon"
        width="20"
        class="transition-all duration-300"
      />
      <Icon
        v-else-if="isMounted && mode === 'dark'"
        icon="solar:sun-bold-duotone"
        width="20"
        class="transition-all duration-300"
      />
    </span>
  </div>
</template> -->


<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Icon } from "@iconify/vue";
import { useColorMode } from "@vueuse/core";

const mode = useColorMode(); // 'light' | 'dark' | 'auto'
const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;

  // Optionally set a default theme if not set
  if (!mode.value) {
    mode.value = 'light'; // or 'dark'
  }
});

// Toggle between light and dark
const toggleTheme = () => {
  mode.value = mode.value === "dark" ? "light" : "dark";
};
</script>


<template>
  <div
    class="group/menu hover:text-primary px-4 dark:hover:text-primary focus:ring-0 rounded-full flex justify-center items-center cursor-pointer text-link dark:text-darklink group relative"
    @click="toggleTheme"
  >
    <span class="flex items-center justify-center relative after:absolute after:w-10 after:h-10 after:rounded-full after:-top-1/2 group-hover:after:bg-lightprimary">
      <!-- Show moon in light mode, sun in dark mode -->
      <Icon
        v-if="isMounted && mode === 'light'"
        icon="tabler:moon"
        width="20"
        class="transition-all duration-300"
      />
      <Icon
        v-else-if="isMounted && mode === 'dark'"
        icon="solar:sun-bold-duotone"
        width="20"
        class="transition-all duration-300"
      />
    </span>
  </div>
</template>
