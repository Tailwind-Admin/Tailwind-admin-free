<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { format } from "date-fns";
import {Card,CardContent} from "@/components/ui/card/index";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip/index'
import Button from "@/components/ui/button/Button.vue";

 defineProps<{ comments: any }>();
</script>

<template>
  <div v-if="comments">
    <!-- Main Comment -->
    <Card class="mb-5 bg-lightgray dark:bg-darkmuted  shadow-none  p-5 flex  flex-col gap-4  rounded-md">
      <div class="flex gap-3 items-center" v-if="comments.profile">
        <Avatar class="h-8 w-8">
          <AvatarImage :src="comments.profile.avatar" alt="avatar" />
          <AvatarFallback>{{ comments.profile?.name?.[0] }}</AvatarFallback>
        </Avatar>
        <div class="flex flex-col sm:flex-row sm:items-center gap-3">
          <h6 class="text-base font-semibold">
            {{ comments.profile?.name }}
          </h6>
          <span class="text-13 opacity-60 flex items-center gap-1">
            <Icon icon="tabler:point" class="size-4 text-dark"></Icon>
            {{ format(new Date(comments?.time), "E, MMM d") }}
          </span>
        </div>
      </div>

      <CardContent class="px-0 text-sm">
        {{ comments.comment }}
      </CardContent>

      <!-- Like / Reply -->
      <div class=" flex items-center gap-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button class="h-7 w-7 rounded-full">
                <Icon icon="solar:undo-left-round-bold" class="size-3.5" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top"> Reply </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Card>

    <!-- Replies -->
    <template v-for="reply in comments.replies" :key="reply.id">
      <div class="md:ms-10 ms-4">
        <Card v-if="reply" class="mb-5 bg-lightgray dark:bg-darkmuted  shadow-none border-0 gap-4 p-5 rounded-md">
          <div class="flex gap-3 items-center" v-if="reply.profile">
            <Avatar class="h-8 w-8">
              <AvatarImage :src="reply.profile.avatar" alt="avatar" />
              <AvatarFallback>{{ reply.profile?.name?.[0] }}</AvatarFallback>
            </Avatar>
            <div class="flex flex-col sm:flex-row sm:items-center gap-3">
              <h6 class="text-base font-semibold">
                {{ reply.profile?.name }}
              </h6>
              <span class="text-13 opacity-60 flex items-center gap-1">
                <Icon icon="tabler:point" class="size-4 text-dark"></Icon>
                {{ format(new Date(reply?.time), "E, MMM d") }}
              </span>
            </div>
          </div>

          <CardContent class="px-0 text-sm">
            {{ reply.comment }}
          </CardContent>
        </Card>
      </div>
    </template>
  </div>
</template>
