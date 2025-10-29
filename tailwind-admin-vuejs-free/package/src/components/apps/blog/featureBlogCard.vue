<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { format } from "date-fns";
import Card from "@/components/ui/card/Card.vue";

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import Badge from "@/components/ui/badge/Badge.vue";

const props = defineProps({ post: Object, index: Number });
const mainPost = props.index === 0;

const linkTo = props.post?.title
  ?.toLowerCase()
  .replace(/ /g, "-")
  .replace(/[^\w-]+/g, "");
</script>

<template>
  <div :class="mainPost ? 'lg:col-span-8 md:col-span-6 col-span-12' : 'lg:col-span-4 md:col-span-6 col-span-12'">
    <Card class="p-0 overflow-hidden group" padding="px-0">
      <div class="relative h-[400px] overflow-hidden">
        <!-- Background image layer -->
        <div
          class="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          :style="`background-image: url('${post?.coverImg}')`"
        ></div>

        <!-- Overlay content -->
        <div
          class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50 p-6 flex flex-col justify-between"
        >
          <!-- Top Row -->
          <div class="flex justify-between items-center">
            <Avatar class="h-10 w-10">
              <AvatarImage :src="post?.author.avatar" alt="user" />
              <AvatarFallback>CM</AvatarFallback>
            </Avatar>
            <Badge>{{ post?.category }}</Badge>
          </div>

          <!-- Title + Meta -->
          <div>
            <h3 class="text-2xl leading-8 font-semibold text-white my-6">
              <RouterLink class="no-underline text-white" :to="linkTo">
                {{ post?.title }}
              </RouterLink>
            </h3>

            <div class="flex justify-between">
              <div class="flex gap-4">
                <div class="flex items-center gap-2 text-white text-sm">
                  <Icon icon="solar:eye-outline" class="size-4"></Icon>
                  {{ post?.view }}
                </div>
                <div class="flex items-center gap-2 text-white text-sm">
                  <Icon icon="solar:chat-line-linear" class="size-4"></Icon>
                  {{ post?.comments.length }}
                </div>
              </div>
              <div>
                <div class="flex items-center gap-2 text-white text-sm">
                  <Icon icon="tabler:point" class="size-4"></Icon>
                  {{ format(new Date(post?.createdAt), "E, MMM d") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>
