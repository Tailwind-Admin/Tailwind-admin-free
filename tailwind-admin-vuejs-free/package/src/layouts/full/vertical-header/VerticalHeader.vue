<template>
  <header :class="['sticky top-0 z-20', isSticky ? 'bg-white dark:bg-dark shadow-md fixed w-full' : 'bg-transparent']">

    <!-- Main Header Container -->
    <div class="flex items-center justify-between py-4 px-2 sm:px-6">

      <!-- Left section: Sidebar toggle (for desktop only) -->
      <div class="hidden xl:flex items-center space-x-2">
        <div class="flex items-center gap-2">
          <div class="relative">
            <Icon icon="solar:magnifer-linear" width="18" height="18"
              class="absolute left-3 top-1/2 -translate-y-1/2" />
            <Input type="text" placeholder="Search..." class="rounded-xl pl-10" />
          </div>
        </div>
      </div>









      <SidebarTrigger class="xl:hidden" @click="toggleSidebar" />



      <div class="xl:hidden flex-1 flex justify-center">
        <FullLogo />
      </div>

      <!-- Right section: theme, lang, profile, menu icon -->
      <div class="flex items-center space-x-2">

        <!-- Desktop only -->
        <div class="hidden xl:flex items-center ">
          <div
            class="relative lg:block hidden group w-fit shadow-grid-shadow bg-[radial-gradient(100%_707.08%_at_0%_0%,#15CEBD_0%,#548AFE_33.82%,#E02FD6_72.12%,#FDB54E_100%)] p-0.5 rounded-full">
            <a href="https://tailwind-admin.com/#pricing"
              class="flex items-center gap-2.5 px-3 py-1.5 bg-card rounded-full transition-all dark:hover:bg-[radial-gradient(100%_707.08%_at_0%_0%,#15CEBD36_0%,#548AFE36_33.82%,#E02FD636_72.12%,#FDB54E36_100%)] group hover:bg-[radial-gradient(100%_707.08%_at_0%_0%,#15CEBD36_0%,#548AFE36_33.82%,#E02FD636_72.12%,#FDB54E36_100%)]">
              <h6 class="text-base font-semibold">Check Pro Version</h6>
            </a>
          </div>
          <ThemeToggler />

          <NotificationDD />
          <ProfileDD />
        </div>

        <!-- Mobile menu icon -->
        <button @click="toggleMobileMenu"
          class="xl:hidden p-2 rounded-full hover:text-primary dark:hover:text-primary relative hover:bg-lightprimary">
          <Icon icon="solar:menu-dots-bold-duotone" class="!h-5 !w-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Header Menu -->
    <div v-if="mobileMenuActive" class="xl:hidden block">
      <MobileHeaderItems />
    </div>






  </header>
</template>



<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'


import NotificationDD from './NotificationDD.vue'
import ProfileDD from './ProfileDD.vue'

import FullLogo from '../logo/Logo.vue'

import LayoutVerticalSidebar from '../vertical-sidebar/VerticalSidebar.vue'
import MobileHeaderItems from './MobileHeaderItems.vue'

import ThemeToggler from '../vertical-header/ThemeToggler.vue'

import { Input } from '@/components/ui/input'
import { Icon } from '@iconify/vue'
import SidebarTrigger from '../../../components/ui/sidebar/SidebarTrigger.vue'

// Props
defineProps({
  layoutType: {
    type: String,
    default: 'vertical'
  }
})





const isSticky = ref(false)

const mobileMenuActive = ref(false)






const toggleMobileMenu = () => {
  mobileMenuActive.value = !mobileMenuActive.value
}


onMounted(() => {
  const handleScroll = () => {
    isSticky.value = window.scrollY > 50;
  }

  window.addEventListener('scroll', handleScroll)

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

</script>
