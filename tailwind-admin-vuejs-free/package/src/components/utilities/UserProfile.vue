<script setup>
import { ref, reactive, watch } from 'vue'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icon } from '@iconify/vue'
import user1 from '@/assets/images/profile/user-1.jpg'
import CardBox from '../shared/CardBox.vue'

const openModal = ref(false)
const modalType = ref(null) 

const personal = reactive({
  firstName: 'Mathew',
  lastName: 'Anderson',
  email: 'mathew.anderson@gmail.com',
  phone: '(347) 528-1947',
  position: 'Team Leader',
  facebook: 'https://www.facebook.com/wrappixel',
  twitter: 'https://twitter.com/wrappixel',
  github: 'https://github.com/wrappixel',
  dribbble: 'https://dribbble.com/wrappixel'
})

const address = reactive({
  location: 'United States',
  state: 'San Diego, California, United States',
  pin: '92101',
  zip: '30303',
  taxNo: 'GA45273910'
})

const tempPersonal = reactive({ ...personal })
const tempAddress = reactive({ ...address })

watch([openModal, modalType], () => {
  if (openModal.value && modalType.value === 'personal') {
    Object.assign(tempPersonal, personal)
  } else if (openModal.value && modalType.value === 'address') {
    Object.assign(tempAddress, address)
  }
})

function handleSave() {
  if (modalType.value === 'personal') {
    Object.assign(personal, tempPersonal)
  } else if (modalType.value === 'address') {
    Object.assign(address, tempAddress)
  }
  openModal.value = false
}

const socialLinks = [
  { href: personal.facebook, icon: 'streamline-logos:facebook-logo-2-solid' },
  { href: personal.twitter, icon: 'streamline-logos:x-twitter-logo-solid' },
  { href: personal.github, icon: 'ion:logo-github' },
  { href: personal.dribbble, icon: 'streamline-flex:dribble-logo-remix' }
]
</script>

<template>
  <div class="flex flex-col gap-6">
    <!-- Profile Header -->
    <CardBox class="p-6 overflow-hidden">
      <div class="flex flex-col sm:flex-row items-center gap-6">
        <img :src="user1" class="rounded-full" width="70" height="70" />

        <div class="flex flex-wrap gap-4 justify-center sm:justify-between items-center w-full">
          <div class="flex flex-col sm:text-left text-center gap-1.5">
            <h5 class="card-title">{{ personal.firstName }} {{ personal.lastName }}</h5>
            <div class="flex flex-wrap items-center gap-1 md:gap-3">
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ personal.position }}</p>
              <div class="hidden h-4 w-px bg-gray-300 dark:bg-gray-700 xl:block"></div>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ address.location }}</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <a
              v-for="(item, index) in socialLinks"
              :key="index"
              :href="item.href"
              target="_blank"
              class="flex h-11 w-11 items-center justify-center gap-2 rounded-full shadow-md border border-ld hover:bg-gray-50 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
            >
              <Icon :icon="item.icon" width="20" height="20" />
            </a>
          </div>
        </div>
      </div>
    </CardBox>

    <!-- Info Cards -->
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <!-- Personal -->
      <div class="space-y-6 rounded-xl border border-ld md:p-6 p-4">
        <h5 class="card-title">Personal Information</h5>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-7 2xl:gap-x-32">
          <div><p class="text-xs text-gray-500">First Name</p><p class="text-link dark:text-darklink">{{ personal.firstName }}</p></div>
          <div><p class="text-xs text-gray-500">Last Name</p><p class="text-link dark:text-darklink">{{ personal.lastName }}</p></div>
          <div><p class="text-xs text-gray-500">Email</p><p class="text-link dark:text-darklink">{{ personal.email }}</p></div>
          <div><p class="text-xs text-gray-500">Phone</p><p class="text-link dark:text-darklink">{{ personal.phone }}</p></div>
          <div><p class="text-xs text-gray-500">Position</p><p class="text-link dark:text-darklink">{{ personal.position }}</p></div>
        </div>
        <div class="flex justify-end">
          <Button size="sm" @click="modalType = 'personal'; openModal = true" class="flex items-center gap-1.5">
            <Icon icon="ic:outline-edit" width="18" height="18" /> Edit
          </Button>
        </div>
      </div>

      <!-- Address -->
      <div class="space-y-6 rounded-xl border border-ld md:p-6 p-4">
        <h5 class="card-title">Address Details</h5>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-7 2xl:gap-x-32">
          <div><p class="text-xs text-gray-500">Location</p><p class="text-link dark:text-darklink">{{ address.location }}</p></div>
          <div><p class="text-xs text-gray-500">Province / State</p><p class="text-link dark:text-darklink">{{ address.state }}</p></div>
          <div><p class="text-xs text-gray-500">PIN Code</p><p class="text-link dark:text-darklink">{{ address.pin }}</p></div>
          <div><p class="text-xs text-gray-500">ZIP</p><p class="text-link dark:text-darklink">{{ address.zip }}</p></div>
          <div><p class="text-xs text-gray-500">Federal Tax No.</p><p class="text-link dark:text-darklink">{{ address.taxNo }}</p></div>
        </div>
        <div class="flex justify-end">
          <Button size="sm"  @click="modalType = 'address'; openModal = true" class="flex items-center gap-1.5">
            <Icon icon="ic:outline-edit" width="18" height="18" /> Edit
          </Button>
        </div>
      </div>
    </div>

    <!-- Edit Modal -->
    <Dialog v-model:open="openModal" >
      <DialogContent class="sm:max-w-lg max-w-2xl overflow-y-auto" >
        <DialogHeader>
          <DialogTitle class="mb-4">
            {{ modalType === 'personal' ? 'Edit Personal Information' : 'Edit Address Details' }}
          </DialogTitle>
        </DialogHeader>

        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <template v-if="modalType === 'personal'">
            <div class="flex flex-col gap-2">
              <Label for="firstName">First Name</Label>
              <Input v-model="tempPersonal.firstName" placeholder="First Name" id="firstName" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="lastName">Last Name</Label>
              <Input v-model="tempPersonal.lastName" placeholder="Last Name" id="lastName" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="email">Email</Label>
              <Input v-model="tempPersonal.email" placeholder="Email" id="email" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="phone">Phone</Label>
              <Input v-model="tempPersonal.phone" placeholder="Phone" id="phone" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="position">Position</Label>
              <Input v-model="tempPersonal.position" placeholder="Position" id="position" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="facebook">Facebook</Label>
              <Input v-model="tempPersonal.facebook" placeholder="Facebook URL" id="facebook" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="twitter">Twitter</Label>
              <Input v-model="tempPersonal.twitter" placeholder="Twitter URL" id="twitter" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="github">GitHub</Label>
              <Input v-model="tempPersonal.github" placeholder="GitHub URL" id="github" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="dribbble">Dribbble</Label>
              <Input v-model="tempPersonal.dribbble" placeholder="Dribbble URL" id="dribbble" />
            </div>
          </template>

          <template v-else>
            <div class="flex flex-col gap-2">
              <Label for="location">Location</Label>
              <Input v-model="tempAddress.location" placeholder="Location" id="location" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="state">State</Label>
              <Input v-model="tempAddress.state" placeholder="State" id="state" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="pin">PIN Code</Label>
              <Input v-model="tempAddress.pin" placeholder="PIN Code" id="pin" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="zip">ZIP</Label>
              <Input v-model="tempAddress.zip" placeholder="ZIP" id="zip" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="taxNo">Federal Tax No.</Label>
              <Input v-model="tempAddress.taxNo" placeholder="Federal Tax No." id="taxNo" />
            </div>
          </template>
        </div>

        <DialogFooter class=" flex flex-wrap flex-row  gap-2 mt-4">
          <Button @click="handleSave">Save Changes</Button>
          <Button
           
            variant="lighterror"
            @click="openModal = false"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>
