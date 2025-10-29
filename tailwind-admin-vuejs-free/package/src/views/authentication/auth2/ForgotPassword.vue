<script setup lang="tsx">

import { RouterLink } from 'vue-router'
import FullLogo from '@/layouts/full/logo/Logo.vue'
import Button from '@/components/ui/button/Button.vue'
import AuthForgotPassword from '@/views/authentication/authforms/AuthForgotPassword.vue'
import Card from '@/components/ui/card/Card.vue'
</script>
<template>
 <div class="relative overflow-hidden h-screen bg-lightprimary dark:bg-darkprimary">
      <div class="flex h-full justify-center items-center px-4">
        <Card class="md:w-[450px] w-full border-none">
          <div class="mb-6 flex items-center justify-center">
            <FullLogo />
          </div>
          <p class="text-darklink text-sm text-center my-4">
            Please enter the email address associated with your account and We will email you a link
            to reset your password.
          </p>
          <AuthForgotPassword />
          <Button variant='lightprimary' asChild class="w-full mt-3">
            <RouterLink to="/auth/login2">Back to Login</RouterLink>
          </Button>
        </Card>
      </div>
    </div>

</template>