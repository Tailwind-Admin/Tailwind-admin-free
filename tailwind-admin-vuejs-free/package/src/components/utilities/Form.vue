<script setup lang="ts">
import { ref } from 'vue'

import type { CalendarDate, DateValue } from '@internationalized/date'
import { format } from 'date-fns'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Icon } from '@iconify/vue'
import CardBox from '../shared/CardBox.vue'

// State
const time = ref('')
const website = ref('www.tailwind-admin.com')
const copied = ref(false)


const isChecked = ref(true);

function toggleChecked(e: { target: { checked: boolean } }) {
    isChecked.value = e.target.checked;
}

const switch1 = ref(false)
const switch2 = ref(true)
const switch3 = ref(true)

const open = ref(false)



const selectedDate = ref<Date | undefined>(undefined)

// ✅ CalendarDate used internally by Calendar component
const calendarDate = ref<CalendarDate | undefined>(undefined)

// ✅ When user selects a date in calendar
function onDateSelect(date: DateValue | undefined) {
    if (date) {
        calendarDate.value = date as CalendarDate
       const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
          selectedDate.value = date.toDate(timeZone)
        open.value = false
    }
}

function handleCopy() {
    navigator.clipboard.writeText(website.value)
        .then(() => {
            copied.value = true
            setTimeout(() => (copied.value = false), 1500)
        })
        .catch(err => {
            console.error('Failed to copy:', err)
        })
}


</script>

<template>


    <div class="grid gap-6 grid-cols-1 xl:grid-cols-2">
        <div class="flex flex-col gap-6">
            <!-- Default Inputs Section -->
            <CardBox>
                <h5 class="card-title">Default Inputs</h5>
                <div class=" flex flex-col gap-6">
                    <div>
                        <Label for="name">Input</Label>
                        <Input id="name" type="text" required class="mt-2" />
                    </div>
                    <div>
                        <Label for="firstname">Input with Placeholder</Label>
                        <Input id="firstname" type="text" placeholder="Firstname" required class="mt-2" />
                    </div>

                    <div>
                        <Label for="countries">Select Input</Label>
                        <Select>
                            <SelectTrigger class="mt-2 w-full">
                                <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="us">United States</SelectItem>
                                <SelectItem value="ca">Canada</SelectItem>
                                <SelectItem value="fr">France</SelectItem>
                                <SelectItem value="de">Germany</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label for="password">Password Input</Label>
                        <Input id="password" type="password" placeholder="Enter your Password" required class="mt-2" />
                    </div>

                    <div class="flex flex-col gap-3">
                        <Label for="date" class="px-1">Date of birth</Label>
                        <Popover v-model:open="open">
                            <PopoverTrigger as-child>
                                <Button variant="ghost" id="date"
                                    class="w-full justify-between font-normal hover:bg-transparent border border-ld" >
                                    {{ selectedDate ? format(selectedDate, 'PPP') : 'Select date' }}
                                    <Icon icon="solar:calendar-minimalistic-linear" width="18" height="18" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent class="w-auto overflow-hidden p-0" align="start">
                                <Calendar mode="single"  @update:modelValue="onDateSelect"   v-model:modelValue="calendarDate as DateValue"  />
                                    
                            </PopoverContent>
                        </Popover>

                       
                    </div>

                    <div>
                        <Label for="time">Time Picker Input</Label>
                        <div class="relative mt-2">
                            <Input id="time" type="time" min="09:00" max="18:00" v-model="time" required />

                        </div>
                    </div>

                    <div>
                        <Label for="card">Card</Label>
                        <div class="relative mt-2">
                            <Icon icon="uim:master-card" width="20" height="20"
                                class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                            <Input id="card" type="text" placeholder="Card number" class="pl-10" />
                        </div>
                    </div>
                </div>
            </CardBox>

            <!-- Textarea Section -->
            <CardBox>
                <h5 class="card-title">Textarea Input</h5>
                <div class="flex flex-col gap-6">
                    <div>
                        <Label for="comment">Description</Label>
                        <Textarea id="comment" placeholder="Leave a comment..." />
                    </div>
                    <div>
                        <Label for="disabled-comment">Description</Label>
                        <Textarea id="disabled-comment" placeholder="Disabled" disabled />
                    </div>
                    <div>
                        <Label for="error-comment" class="text-red-600">Description</Label>
                        <Textarea id="error-comment" placeholder="Leave a comment..."
                            class="border-red-600 text-red-600 focus-visible:border-red-600" />
                    </div>
                </div>
            </CardBox>

            <!-- Input Colors Section -->
            <CardBox>
                <h5 class="card-title">Input Colors</h5>
                <div class="flex flex-col gap-6">
                    <div>
                        <Label for="warning" class="text-warning">Warning</Label>
                        <Input id="warning" placeholder="Warning input" variant="warning" class="mt-2" />
                    </div>
                    <div>
                        <Label for="info" class="text-info">Info</Label>
                        <Input id="info" placeholder="Info input" variant="info" class="mt-2" />
                    </div>
                    <div>
                        <Label for="success" class="text-success">Success</Label>
                        <Input id="success" placeholder="Success input" variant="success" class="mt-2" />
                    </div>
                </div>
            </CardBox>
        </div>

        <!-- Right side (remaining fields) -->
        <div class="flex flex-col gap-6">
            <!-- Input Group with Icons -->
            <CardBox>
                <h5 class="card-title">Input Group</h5>
                <div class=" flex flex-col gap-6">
                    <div class="relative">
                        <Icon icon="solar:letter-linear" width="18" height="18"
                            class="absolute left-3 top-1/2 -translate-y-1/2 text-link dark:text-darklink" />
                        <Input type="email" placeholder="name@example.com" class="pl-10" />
                    </div>
                    <div class="relative">
                        <Icon icon="solar:phone-rounded-linear" width="18" height="18"
                            class="absolute left-3 top-1/2 -translate-y-1/2 text-link dark:text-darklink" />
                        <Input type="tel" placeholder="+1" class="pl-10" />
                    </div>
                    <div class="relative">
                        <Icon icon="solar:global-linear" width="18" height="18"
                            class="absolute left-3 top-1/2 -translate-y-1/2 text-link dark:text-darklink" />
                        <Input type="text" placeholder="www.example.com" class="pl-10" />
                    </div>
                    <div class="relative">
                        <Icon icon="solar:link-round-angle-linear" width="18" height="18"
                            class="absolute left-3 top-1/2 -translate-y-1/2 text-link dark:text-darklink" />
                        <Input type="text" placeholder="www.tailwind-admin.com" class="pl-10" />
                    </div>

                    <div>
                        <Label for="website">Website</Label>
                        <div class="flex gap-2 mt-2">
                            <Input id="website" v-model="website" type="text" class="text-link dark:text-darklink" />
                            <Button @click="handleCopy" variant="lightprimary">
                                {{ copied ? 'Copied' : 'Copy' }}
                            </Button>
                        </div>
                    </div>
                </div>
            </CardBox>

            <!-- File Input -->
            <CardBox>
                <h5 class="card-title">File Input</h5>
                <Input type="file" />
            </CardBox>

            <!-- Checkbox -->
            <CardBox>
                <h5 class="card-title">Checkbox</h5>
                <div class="flex gap-6 ">
                    <div class="flex items-center gap-2">
                        <Checkbox id="default" />
                        <Label for="default" class="mb-0">Default</Label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox id="checked" v-model="isChecked" @change="toggleChecked" />
                        <Label for="checked" class="mb-0">Checked</Label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox id="disabled" disabled />
                        <Label for="disabled" class="mb-0">Disabled</Label>
                    </div>
                </div>
            </CardBox>

            <!-- Radio Buttons -->
            <CardBox>
                <h5 class="card-title">Radio Buttons</h5>
                <RadioGroup default-value="default" class=" flex gap-6">
                    <div class="flex items-center gap-2">
                        <RadioGroupItem value="default" id="default" />
                        <Label for="default" class="mb-0">Default</Label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioGroupItem value="selected" id="selected" />
                        <Label for="selected" class="mb-0">Selected</Label>
                    </div>
                    <div class="flex items-center gap-2">
                        <RadioGroupItem value="disabled" id="disabled" disabled />
                        <Label for="disabled" class="mb-0">Disabled</Label>
                    </div>
                </RadioGroup>
            </CardBox>

            <!-- Switch / Toggle -->
            <CardBox>
                <h5 class="card-title">Toggle Switch</h5>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-6 ">
                    <div class="flex items-center gap-2">
                        <Switch :checked="switch1" @update:checked="(v: boolean) => switch1 = v" />
                        <Label>Toggle me</Label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Switch :model-value="switch2" @update:checked="(v: boolean) => switch2 = v" />
                        <Label>Toggle me (checked)</Label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Switch disabled />
                        <Label>Disabled</Label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Switch disabled :model-value="true" />
                        <Label>Disabled (checked)</Label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Switch :model-value="switch3" @update:checked="(v: boolean) => switch3 = v" />
                    </div>
                </div>
            </CardBox>
        </div>
    </div>
</template>
