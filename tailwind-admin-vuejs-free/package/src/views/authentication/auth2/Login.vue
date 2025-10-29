<script setup lang="tsx">
import { RouterLink } from 'vue-router'
import FullLogo from '@/layouts/full/logo/Logo.vue'
import AuthLogin from '@/views/authentication/authforms/AuthLogin.vue'
import SocialButtons from '@/views/authentication/authforms/SocialButtons.vue'
import Card from '@/components/ui/card/Card.vue'
</script>



<template>
<div class="relative overflow-hidden h-screen bg-lightprimary dark:bg-darkprimary">
        <div class="flex h-full justify-center items-center px-4">
          <Card class="md:w-[450px] w-full border-none">
            <div class="mb-6 flex items-center justify-center">
              <FullLogo />
            </div>
            <SocialButtons title="or sign in with" />
            <AuthLogin />
            <div class="flex gap-2 text-base text-ld font-medium mt-6 items-center justify-center">
              <p>New to TailwindAdmin?</p>
              <RouterLink
                to="/auth/register2"
                class="text-primary text-sm font-medium"
              >
                Create an account
              </RouterLink>
            </div>
          </Card>
        </div>
      </div>

</template>