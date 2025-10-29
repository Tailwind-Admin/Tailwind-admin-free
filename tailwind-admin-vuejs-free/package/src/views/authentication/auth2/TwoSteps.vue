
<script setup lang="tsx">

import { RouterLink } from 'vue-router'
import FullLogo from '@/layouts/full/logo/Logo.vue'
import AuthTwoSteps from '@/views/authentication/authforms/AuthTwoSteps.vue'
import Card from '@/components/ui/card/Card.vue'
</script>

<template>


      <div class="relative overflow-hidden h-screen bg-lightprimary dark:bg-darkprimary">
        <div class="flex h-full justify-center items-center px-4">
          <Card class="md:w-[450px] w-full border-none">
            <div class="mb-6 flex items-center justify-center">
              <FullLogo />
            </div>
            <p class="text-darklink text-sm font-medium text-center">
              We sent a verification code to your mobile. Enter the code from the mobile in the
              field below.
            </p>
            <h6 class="text-sm font-bold my-4 text-center">******1234</h6>
            <AuthTwoSteps />
            <div class="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-left">
              <p>Didn't get the code?</p>
              <RouterLink to='/' class="text-primary text-sm font-medium">
                Resend
              </RouterLink>
            </div>
          </Card>
        </div>
      </div>
</template>