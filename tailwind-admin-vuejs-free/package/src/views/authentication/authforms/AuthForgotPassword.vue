<template>
  <form class="mt-6">
    <div class="mb-4">
      <div className="mb-2 block">
        <Label for="emadd">Email Address</Label>
      </div>
      <Input v-model="email" id="email" type="email" class="form-control " required />
    </div>

    <Button class="w-full">
      Forgot Password
    </Button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { Input } from '@/components/ui/input'
import Button from '@/components/ui/button/Button.vue';
import Label from '@/components/ui/label/Label.vue'

const email = ref('')


</script>
