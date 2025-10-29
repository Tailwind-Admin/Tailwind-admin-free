<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Button from '@/components/ui/button/Button.vue'

import Checkbox from '@/components/ui/checkbox/Checkbox.vue'
import Label from '@/components/ui/label/Label.vue'
import { Input } from '@/components/ui/input'


const username = ref('')
const password = ref('')
const rememberDevice = ref(false)

function onSubmit(event) {
  event.preventDefault()

  console.log('Login:', { username: username.value, password: password.value, rememberDevice: rememberDevice.value })
}
</script>

<template>
  <form @submit="onSubmit" class="mt-6">
    <div class="mb-4">
      <div className="mb-2 block">
        <Label for="Username">Username</Label>
      </div>
      <Input id="username" v-model="username" class="form-control" />
    </div>

    <div class="mb-4">
      <div className="mb-2 block">
        <Label for="userpwd">Password</Label>
      </div>
      <Input id="userpwd" type="password" v-model="password" class="form-control" />
    </div>

    <div class="flex justify-between my-5 items-center">
      <div class="flex items-center gap-2">
        <Checkbox id="accept" v-model="rememberDevice" class="checkbox"/>
        <Label
              for="accept"
              class="opacity-90 font-normal cursor-pointer"
            >
              Remeber this Device
            </Label>
      </div>
      <RouterLink to="/auth/auth1/forgot-password" class="text-primary text-sm font-medium">
        Forgot Password?
      </RouterLink>
    </div>
    <Button  class="w-full"> 
      <RouterLink to="/"> Sign in</RouterLink>
    </Button>
  </form>
</template>
