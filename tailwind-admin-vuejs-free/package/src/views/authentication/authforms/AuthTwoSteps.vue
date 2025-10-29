<template>
    <form class="mt-6">
        <div className="mb-4">
            <Label class="mb-2 block">
                Type your 6-digit security code
            </Label>
            <div class="flex gap-3.5">
                <Input type="text" inputmode="numeric" class="form-control text-center " ref="inputs" />
                <Input type="text" inputmode="numeric" class="form-control text-center" ref="inputs" />
                <Input type="text" inputmode="numeric" class="form-control text-center" ref="inputs" />
                <Input type="text" inputmode="numeric" class="form-control text-center" ref="inputs" />
                <Input type="text" inputmode="numeric" class="form-control text-center" ref="inputs" />

            </div>
        </div>

        <Button className="w-full">
            Verify My Account
        </Button>
    </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'


import Input from '@/components/ui/input/Input.vue'
import Button from '@/components/ui/button/Button.vue'
import Label from '@/components/ui/label/Label.vue'

</script>
