<script setup lang="ts">
import { ref } from "vue";
// common components
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import { useNoteStore } from "@/stores/apps/notes";

import { Icon } from "@iconify/vue";
import {Card} from "@/components/ui/card/index";
import {Sheet,SheetTrigger,SheetContent} from '@/components/ui/sheet/index'
import {Button} from "@/components/ui/button/index";
import {Separator} from '@/components/ui/separator/index'
import NotesListing from '@/components/apps/notes/NotesListing.vue'
import AppBaseCard from '@/components/shared/AppBaseCard.vue'
import NotesContent from '@/components/apps/notes/NotesContent.vue'



const store = useNoteStore();
// template breadcrumb
const page = ref({ title: "Notes App" });
const breadcrumbs = ref([
  {
    text: "Notes App",
    disabled: true,
    href: "#",
  },
]);
</script>

<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
  <Card class="p-0">

    <div class="lg:hidden block">
      <Sheet>
        <SheetTrigger class="w-fit py-4 px-6">
          <Button>
            <Icon icon="solar:siderbar-outline" class="size-5" /> Open Sidebar
          </Button>
        </SheetTrigger>
        <Separator />
        <SheetContent
          :key="store.notes.length"
          class="gap-0"
          side="left"
        >
          <NotesListing />
        </SheetContent>
      </Sheet>
    </div>
    <AppBaseCard>
      <template v-slot:leftpart> <NotesListing /></template>
      <template v-slot:rightpart>
        <NotesContent />
      </template>

      <template v-slot:mobileLeftContent>
        <NotesListing/>
      </template>
    </AppBaseCard>
  </Card>
</template>
