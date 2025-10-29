<script setup lang="ts">
import Card from "@/components/ui/card/Card.vue";
import { Icon } from "@iconify/vue";
import { format } from "date-fns";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import Badge from "@/components/ui/badge/Badge.vue";
import AspectRatio from "@/components/ui/aspect-ratio/AspectRatio.vue";
const props = defineProps({ post: Object });
const linkTo = props.post?.title
  ?.toLowerCase()
  .replace(/ /g, "-")
  .replace(/[^\w-]+/g, "");
</script>

<template>
  <div class="col-span-12 lg:col-span-4 md:col-span-6">
    <Card class="p-0 rounded-md overflow-hidden group" padding="px-0">
       <RouterLink :to="linkTo">
      <AspectRatio :ratio="16 / 9" class="relative overflow-hidden">
        <img
          :src="post?.coverImg"
          alt="Image"
          class="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
        />
        <Badge variant="white" class=" absolute bottom-6 end-6 rounded-md">
          2 min read
        </Badge>
      </AspectRatio>
      </RouterLink>
      <div class="p-6 pt-0 flex flex-col gap-6">
        <div class="flex flex-col gap-2 -mt-6">
          <Avatar class="h-10 w-10">
            <AvatarImage :src="post?.author.avatar" alt="user" />
            <AvatarFallback>CM</AvatarFallback>
          </Avatar>
          <Badge variant="muted" class="mt-3 rounded-md">{{ post?.category }}</Badge>
        </div>

        <h5 class="text-xl group-hover:text-primary leading-tight">
        <RouterLink
          class=""
          :to="linkTo"
        >
          {{ post?.title }}
        </RouterLink>
        </h5>
        <div class="flex justify-between">
          <div class="flex gap-4">
            <div class="flex items-center gap-2 text-darklink text-[15px]">
              <Icon icon="solar:eye-outline" class="size-4 text-ld"></Icon>
              {{ post?.view }}
            </div>
            <div class="flex items-center gap-2 text-darklink text-[15px]">
              <Icon
                icon="solar:chat-line-linear"
                class="size-4 text-ld"
              ></Icon>
              {{ post?.comments.length }}
            </div>
          </div>
          <div>
            <div class="flex items-center gap-2 text-darklink text-[15px]">
              <Icon icon="tabler:point" class="size-4 text-ld"></Icon>
              {{ format(new Date(post?.createdAt), "E, MMM d") }}
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>
