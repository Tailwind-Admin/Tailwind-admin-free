<script setup lang="ts">
import {  computed } from "vue";
import { useNoteStore } from "@/stores/apps/notes";
import { colorVariation } from "@/_mockApis/apps/notes/notesData";
import Button from "@/components/ui/button/Button.vue";
import AddNote from './AddNote.vue'
import { CheckIcon } from "lucide-vue-next";
import simplebar from "simplebar-vue";
import { Icon } from "@iconify/vue";
import { Alert, AlertTitle,AlertDescription } from '@/components/ui/alert/index'
import {Separator} from '@/components/ui/separator/index'
import {Textarea} from '@/components/ui/textarea/index'

const store = useNoteStore();


const getNote = computed(() => {
  return store.notes[store.notesContent - 1];
});
// theme breadcrumb
</script>
<template>
  <div>
    <div class="flex justify-between items-center py-5 px-6">
      <h4 class="text-lg font-semibold">Edit Notes</h4>
      <AddNote />
    </div>
    <Separator />
    <simplebar class="h-[calc(100vh-450px)]">
      <div class="p-6 flex flex-col gap-7" v-if="getNote">
        <div class="flex flex-col gap-3">
    
          <Textarea
            class="form-control-input min-h-[120px]"
            v-model="getNote.title"
              placeholder="Edit Note"
          />
        </div>
        <div class="flex flex-col gap-3">
          <h4 class="text-lg font-semibold">Change Notes Color</h4>
          <div class="flex gap-3 align-center">
            <Button
              icon
              v-for="btcolor in colorVariation"
              :key="btcolor.id"
              :class="'h-7 w-7 rounded-full p-0 bg-' + btcolor.color"
              @click="store.updateNote(getNote.id, btcolor.color)"
            >
              <CheckIcon width="16" v-if="getNote.color === btcolor.color" />
            </Button>
          </div>
        </div>
      </div>
      <div class="p-6" v-else>
        <Alert variant="destructive" class="border border-destructive">
          <Icon icon="solar:info-circle-broken" class="size-6" />
          <AlertTitle>Opps</AlertTitle>
          <AlertDescription>
            No Note selected Please select note
          </AlertDescription>
        </Alert>
      </div>
    </simplebar>
  </div>
</template>
