<script setup lang="ts">
import { ref, computed } from "vue";
import { useNoteStore } from "@/stores/apps/notes";
import { Icon } from "@iconify/vue";
import simplebar from "simplebar-vue";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip/index'
import { Alert, AlertTitle,AlertDescription } from '@/components/ui/alert/index'
import Input from "@/components/ui/input/Input.vue";
import {Button} from '@/components/ui/button/index'

const store = useNoteStore();

const getNotes = computed(() => {
  return store.notes;
});

const NoteItem = getNotes;
const searchValue = ref("");
const filteredNotes = computed(() => {
  return NoteItem.value.filter((note) => {
    return note.title?.toLowerCase().includes(searchValue.value.toLowerCase());
  });
});
</script>
<template>
  <div class="">
    <div class="p-6 flex flex-col gap-4">
      <h4 class="text-lg font-semibold">All Notes</h4>
      <div class="overflow-hidden relative">
        <Icon icon="solar:magnifer-linear" height="18"
                        class="absolute left-2 top-1/2 -translate-y-1/2" />
            <Input  v-model="searchValue" type="text" placeholder="Search Notes..."   class=" pl-10"/>

      </div>
    </div>
    <simplebar class="lg:h-[calc(100vh-450px)] h-[calc(100vh-200px)]">
      <div class="flex flex-col gap-3 px-6">
        <div
          v-for="(note, index) in filteredNotes"
          :key="note.id"
          :index="index"
          v-if="filteredNotes.length > 0"
          @click="store.SelectNote(note.id)"
          :class="[
            'flex flex-col gap-1 p-4 rounded-md cursor-pointer  transition-transform duration-100 ease-in hover:scale-[1.02] bg-light' +
              note.color,
          ]"
        >
          <h6 :class="'text-base truncate  text-' + note.color">
            {{ note.title }}
          </h6>
          <div class="flex justify-between items-center">
            <p class="text-ld text-xs">
              {{ new Date(note.datef).toLocaleDateString() }}
            </p>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    @click="store.deleteNote(note.id)"
                    class="bg-transparent h-8 w-8 text-ld p-0 flex items-center hover:bg-transparent hover:text-dark dark:hover:text-white dark:!bg-transparent"
                  >
                    <Icon
                      icon="solar:trash-bin-minimalistic-outline"
                     height="18"
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top"> Delete Note </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
      <div class="px-6" v-if="filteredNotes.length === 0">
        <Alert variant="destructive" class="border border-destructive">
          <Icon icon="solar:info-circle-broken" class="size-6" />
          <AlertTitle>Opps</AlertTitle>
          <AlertDescription>
            The Notes you are looking for is not found
          </AlertDescription>
        </Alert>
      </div>
    </simplebar>
  </div>
</template>
