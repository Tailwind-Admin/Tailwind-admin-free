<script setup>
import { RouterLink } from 'vue-router'

// Import your images
import Google from '.././../../assets/images/svgs/google-icon.svg'
import FB from '.././../../assets/images/svgs/icon-facebook.png'

// Props
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div>
    <div class="flex justify-between gap-8 my-6">
      <RouterLink
        to="/"
        class="px-4 py-2.5 border border-ld flex gap-2 items-center w-full rounded-md text-center justify-center text-ld text-primary-ld"
      >
        <img :src="Google" alt="google" height="18" width="18" /> Google
      </RouterLink>

      <RouterLink
        to="/"
        class="px-4 py-2.5 border border-ld flex gap-2 items-center w-full rounded-md text-center justify-center text-ld text-primary-ld"
      >
        <img :src="FB" alt="facebook" height="18" width="18" /> Facebook
      </RouterLink>
    </div>

    <!-- Divider with text -->
 

    <div className="flex items-center justify-center gap-2">
        <hr className="grow border-ld" />
        <p className="text-base text-ld font-medium">  {{ title }}</p>
        <hr className="grow border-ld" />
      </div>
  </div>
</template>
