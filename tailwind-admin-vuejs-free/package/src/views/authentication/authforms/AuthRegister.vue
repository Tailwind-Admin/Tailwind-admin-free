<script setup>
import { ref } from 'vue'

import Label from '@/components/ui/label/Label.vue'
import { Input } from '@/components/ui/input'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'
import Button from '@/components/ui/button/Button.vue'
const name = ref('')
const email = ref('')
const password = ref('')

function onSubmit(e) {
  e.preventDefault()

  console.log('Register:', { name: name.value, email: email.value, password: password.value })
}
</script>

<template>
  <form @submit="onSubmit" class="mt-6">
    <div class="mb-4">

      <div className="mb-2 block">
        <Label for="name" class="font-semibold">Name</Label>
      </div>

      <Input id="name" type="text" v-model="name" class="form-control" required />
    </div>

    <div class="mb-4">

      <div className="mb-2 block">
        <Label for="emadd" class="font-semibold">Email Address</Label>
      </div>
      <Input id="emadd" type="email" v-model="email" class="form-control" required />
    </div>

    <div class="mb-6">
        <div className="mb-2 block">
        <Label for="userpwd" class="font-semibold">Password</Label>
      </div>
      <Input id="userpwd" type="password" v-model="password" class="form-control" required />
    </div>

    <Button class="w-full ">
      Sign Up
    </Button>
  </form>
</template>
