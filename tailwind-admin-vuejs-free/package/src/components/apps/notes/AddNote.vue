<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useNoteStore } from "@/stores/apps/notes";
import { colorVariation } from "@/_mockApis/apps/notes/notesData";
import Button from "@/components/ui/button/Button.vue";
import {Textarea} from '@/components/ui/textarea/index'
import { CheckIcon } from "lucide-vue-next";
import { Dialog, DialogContent,DialogTrigger, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog/index'

const dialogOpen = ref(false);
const title = ref("");
const color = ref("primary");
const store = useNoteStore();

onMounted(() => {
  store.fetchNotes();
});


function colorset(btcolor: string | undefined) {
  if (btcolor) {
    color.value = btcolor;
  }
}



function addNote() {
  const newId = store.notes.length ? Math.max(...store.notes.map(n => n.id ?? 0)) + 1 : 1;
  store.addNote({
    id: newId,
    title: title.value,
    color: color.value,
    datef: new Date(),
  });
  dialogOpen.value = false;
  title.value = "";
}
</script>

<template>
  <div>
    <!-- Trigger Button -->
    <Dialog v-model:open="dialogOpen">
      <DialogTrigger as-child>
        <Button>Add Notes</Button>
      </DialogTrigger>

      <!-- Dialog Content -->
      <DialogContent class="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle class="text-lg font-medium">Add Notes</DialogTitle>
        </DialogHeader>

        <div class="space-y-4">
          <!-- Note Text -->
          <Textarea  placeholder="Write your note here..." v-model="title" />

          <!-- Color Selection -->
          <div>
            <h4 class="text-sm font-medium mb-2">Select Notes Color</h4>
            <div class="flex gap-3 items-center">
              <Button
                v-for="btcolor in colorVariation"
                :key="btcolor.id"
                
                class="w-6 h-6 p-0 rounded-full flex items-center justify-center"
                :class="'bg-'+ btcolor.color"
              
                @click="colorset(btcolor.color)"
              >
                <CheckIcon
                  v-if="color === btcolor.color"
                  class="w-4 h-4 text-white"
                />
            </Button>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <DialogFooter class="mt-4 flex gap-2">
          <Button   class="rounded-md"  @click="addNote">
            Save
          </Button>
          <Button    variant="outline" class="rounded-md"  @click="dialogOpen = false">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>
