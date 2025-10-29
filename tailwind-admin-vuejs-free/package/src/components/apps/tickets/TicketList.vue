<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { useTicketstore } from "@/stores/apps/tickets";
import { format } from "date-fns";
import { Icon } from "@iconify/vue";

import user3 from "@/assets/images/profile/user-3.jpg";
import Card from "@/components/ui/card/Card.vue";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import { Table, TableHeader, TableRow, TableHead, TableCell } from "@/components/ui/table/index";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip/index'
import { Alert, AlertTitle } from '@/components/ui/alert/index'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog/index'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select/index";
import { Badge, type BadgeVariants } from '@/components/ui/badge/index'
import type { TicketType } from "@/types/apps/Tickets";
import TableBody from "@/components/ui/table/TableBody.vue";


const store = useTicketstore();

// Lifecycle
onMounted(async () => {
  await store.fetchTicket();
  setTicketType(TicketTypeVal.value);
});

// State
const getTickets = computed(() => store.ticket);
let FinalTickets = ref([...getTickets.value]);
const searchValue = ref("");
const TicketTypeVal = ref("total");

const showCreateTicketModal = ref(false);
const newTicket = ref({ title: "", description: "", usernm: "Liam" });

// Methods
const createTicket = () => {
  if (
    newTicket.value.title &&
    newTicket.value.description &&
    newTicket.value.usernm
  ) {
    const newId = getTickets.value.length + 1;
    const newTicketData = {
      Id: newId,
      ticketTitle: newTicket.value.title,
      ticketDescription: newTicket.value.description,
      AgentName: newTicket.value.usernm,
      Label: "success",
      Status: "Open",
      Date: new Date().toISOString(),
      thumb: user3,
    };

    store.addTicket(newTicketData);
    setTicketType("total");
    newTicket.value = { title: "", description: "", usernm: "Liam" };
    showCreateTicketModal.value = false;
  }
};

const setTicketType = (type: string) => {
  TicketTypeVal.value = type;
  if (type === "total") {
    FinalTickets.value = [...getTickets.value];
  } else {
    FinalTickets.value = getTickets.value.filter(
      (t) => t.Status?.toLowerCase() === type.toLowerCase()
    );
  }
  applySearchFilter();
};

const applySearchFilter = () => {
  // Always start from the correct ticket type
  let filtered =
    TicketTypeVal.value === "total"
      ? [...getTickets.value]
      : getTickets.value.filter(
        (t) => t.Status?.toLowerCase() === TicketTypeVal.value.toLowerCase()
      );

  // Apply search if there is a value
  if (searchValue.value) {
    filtered = filtered.filter((t) =>
      t.ticketTitle?.toLowerCase().includes(searchValue.value.toLowerCase())
    );
  }

  FinalTickets.value = filtered;
};
watch(searchValue, applySearchFilter);

const totalTicketCount = computed(() => getTickets.value.length);
const pendingTicketCount = computed(
  () => getTickets.value.filter((t) => t.Status === "Pending").length
);
const openTicketCount = computed(
  () => getTickets.value.filter((t) => t.Status === "Open").length
);
const closedTicketCount = computed(
  () => getTickets.value.filter((t) => t.Status === "Closed").length
);

const handleDeleteTicket = (ticketId: number) => {
  store.deleteTicket(ticketId);
  setTicketType(TicketTypeVal.value);
};


const ticketBadge = (ticket: TicketType): BadgeVariants['variant'] => {
  return ticket.Status === 'Open'
    ? 'lightSuccess'
    : ticket.Status === 'Closed'
      ? 'lightError'
      : ticket.Status === 'Pending'
        ? 'lightWarning'
        : 'default';
};
</script>

<template>
  <Card>
    <div class="flex flex-col gap-6">
      <!-- Stats Cards -->
      <div class="flex gap-4 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible">
        <div
          class="min-w-[200px] bg-lightprimary p-8 rounded-md text-center cursor-pointer transition-transform duration-100 ease-in hover:scale-[1.02]"
          @click="setTicketType('total')">
          <h2 class="text-primary text-2xl font-bold">
            {{ totalTicketCount }}
          </h2>
          <p class="text-primary font-semibold">Total Tickets</p>
        </div>

        <div
          class="min-w-[200px] bg-lightwarning p-8 rounded-md text-center cursor-pointer transition-transform duration-100 ease-in hover:scale-[1.02]"
          @click="setTicketType('Pending')">
          <h2 class="text-warning text-2xl font-bold">
            {{ pendingTicketCount }}
          </h2>
          <p class="text-warning font-semibold">Pending Tickets</p>
        </div>

        <div
          class="min-w-[200px] bg-lightsuccess p-8 rounded-md text-center cursor-pointer transition-transform duration-100 ease-in hover:scale-[1.02]"
          @click="setTicketType('Open')">
          <h2 class="text-success text-2xl font-bold">{{ openTicketCount }}</h2>
          <p class="text-success font-semibold">Open Tickets</p>
        </div>

        <div
          class="min-w-[200px] bg-lighterror p-8 rounded-md text-center cursor-pointer transition-transform duration-100 ease-in hover:scale-[1.02]"
          @click="setTicketType('Closed')">
          <h2 class="text-destructive text-2xl font-bold">
            {{ closedTicketCount }}
          </h2>
          <p class="text-destructive font-semibold">Closed Tickets</p>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex flex-col sm:flex-row justify-between gap-4 items-center">
        <Button @click="showCreateTicketModal = true" class="sm:w-fit w-full">Create Ticket</Button>
        <div class="w-full sm:w-64">
          <div class="relative items-center">
            <Input  v-model="searchValue" type="text" placeholder="Search ticket..."   class=" pl-10"/>

            <span class="absolute start-0 inset-y-0 flex items-center justify-center px-3">
              <Icon icon="solar:magnifer-linear" class="text-muted" height="18" />
            </span>
          </div>
        </div>
      </div>

      <!-- Table -->
      
        <Table class="overflow-x-auto">
          <TableHeader>
            <TableRow class="hover:bg-transparent">
              <TableHead class="w-[60px] font-semibold text-base">Id</TableHead>
              <TableHead class="font-semibold text-base px-4">Ticket</TableHead>
              <TableHead class="font-semibold text-base px-4">Assign To</TableHead>
              <TableHead class="font-semibold text-base px-4">Status</TableHead>
              <TableHead class="font-semibold text-base px-4">Date</TableHead>
              <TableHead class="text-end font-semibold text-base px-4">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow v-for="(ticket,index) in FinalTickets" :index="index" :key="ticket.Id" v-if="FinalTickets.length > 0"
              class="hover:bg-transparent">
              <!-- ID -->
              <TableCell class="p-4 ps-2">{{ ticket.Id }}</TableCell>

              <!-- Ticket Title + Desc -->
              <TableCell class="p-4">
                <h5 class="text-base truncate line-clamp-1">{{ ticket.ticketTitle }}</h5>
                <p class="text-darklink  truncate max-w-[280px]">
                  {{ ticket.ticketDescription }}
                </p>
              </TableCell>

              <!-- Assigned To -->
              <TableCell class="p-4">
                <div class="flex items-center gap-2">
                  <img :src="ticket.thumb" class="h-10 w-10 rounded-full" />
                  <h6 class="text-base">{{ ticket.AgentName }}</h6>
                </div>
              </TableCell>

              <!-- Status -->
              <TableCell class="p-4">
                <Badge :variant="ticketBadge(ticket)">
                  {{ ticket.Status }}
                </Badge>
              </TableCell>

              <!-- Date -->
              <TableCell class="text-sm text-darklink">
                {{
                  ticket?.Date
                    ? format(new Date(ticket.Date), "E, MMM d")
                    : "N/A"
                }}
              </TableCell>

              <!-- Action -->
              <TableCell class=" text-end p-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger as-child>
                      <Button variant="ghosterror" @click.stop="handleDeleteTicket(ticket.Id)">
                        <Icon icon="solar:trash-bin-minimalistic-linear" height="18" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
            </TableRow>

            <!-- Empty state -->
            <TableRow v-else class="hover:bg-transparent">
              <TableCell colspan="6" class="text-center text-muted-foreground">
                <Alert variant="destructive" class="border border-destructive flex justify-center my-4">
                  <Icon icon="solar:info-circle-broken" class="size-7" />
                  <AlertTitle>Opps No Tickets Found</AlertTitle>
                </Alert>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
   
    </div>
  </Card>

  <!-- Create Ticket Modal -->
  <Dialog v-model:open="showCreateTicketModal">
    <DialogContent class="sm:max-w-[500px] gap-4">
      <DialogHeader class="gap-1">
        <DialogTitle class="card-title">Create New Ticket</DialogTitle>
        <DialogDescription class="card-subtitle">Fill in the details for your new support ticket.</DialogDescription>
      </DialogHeader>
      <div class="space-y-4">
        <Input v-model="newTicket.title" placeholder="Ticket Title" class="form-control-input shadow-none" />
        <Input v-model="newTicket.description" placeholder="Ticket Description" class="form-control-input" />

        <Select class="bg-card" v-model="newTicket.usernm" :teleport="false">
          <SelectTrigger class="rounded-md bg-card shadow-none w-full form-control-input">
            <SelectValue placeholder="Assign To" />
          </SelectTrigger>
          <SelectContent class="bg-card border-0 rounded-sm">
            <SelectGroup>
              <SelectItem
                class="rounded-sm cursor-pointer hover:text-primary text-sm hover:bg-lightprimary focus:bg-lightprimary focus:text-primary"
                value="Liam">Liam</SelectItem>
              <SelectItem
                class="rounded-sm cursor-pointer hover:text-primary text-sm hover:bg-lightprimary focus:bg-lightprimary focus:text-primary"
                value="Steve">Steve</SelectItem>
              <SelectItem
                class="rounded-sm cursor-pointer hover:text-primary text-sm hover:bg-lightprimary focus:bg-lightprimary focus:text-primary"
                value="Jack">Jack</SelectItem>
              <SelectItem
                class="rounded-sm cursor-pointer hover:text-primary text-sm hover:bg-lightprimary focus:bg-lightprimary focus:text-primary"
                value="Wiliam">Wiliam</SelectItem>
              <SelectItem
                class="rounded-sm cursor-pointer hover:text-primary text-sm hover:bg-lightprimary focus:bg-lightprimary focus:text-primary"
                value="Dona">Dona</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <DialogFooter>
        <Button variant="destructive" @click="showCreateTicketModal = false">Cancel</Button>
        <Button @click="createTicket">Create</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
