<script setup lang="tsx">

import { RouterLink } from 'vue-router'
import FullLogo from '@/layouts/full/logo/Logo.vue'
import AuthRegister from '@/views/authentication/authforms/AuthRegister.vue'
import SocialButtons from '@/views/authentication/authforms/SocialButtons.vue'
import Card from '@/components/ui/card/Card.vue'
</script>



<template>
  <div class="relative overflow-hidden h-screen bg-lightprimary dark:bg-darkprimary">
        <div class="flex h-full justify-center items-center px-4">
          <Card class="md:w-[450px] w-full border-none">
            <div class="flex items-center justify-center mb-6">
              <FullLogo />
            </div>
            <SocialButtons title="or sign up with" />
            <AuthRegister />
            <div class="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-start">
              <p>Already have an Account?</p>
              <RouterLink to='/auth/login2' class="text-primary text-sm font-medium">
                Sign in
              </RouterLink>
            </div>
          </Card>
        </div>
      </div>


</template>