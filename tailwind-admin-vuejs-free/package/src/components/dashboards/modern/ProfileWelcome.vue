

<script setup lang="tsx">

import img1 from '@/assets/images/profile/user-1.jpg'
import customerimg from '@/assets/images/dashboard/customer-support-img.png'

</script>
<template>

    <div class="relative flex items-center justify-between bg-lightsecondary rounded-lg p-6">
            <div class="flex items-center gap-3">
                <div>
                    <img :src=img1 alt="user-img" width="50" height="50" class="rounded-full" />
                </div>
                <div class="flex flex-col gap-0.5">
                    <h5 class="card-title">Welcome back!  John 👋</h5>
                    <p class="text-link/80 dark:text-white/80">Check your reports</p>
                </div>
            </div>
            <div class="hidden sm:block absolute right-8 bottom-0">
                <img :src=customerimg alt="support-img" width="145" height="95" />
            </div>
        </div>
</template>