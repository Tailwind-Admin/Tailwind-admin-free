<script setup lang="ts">
import { format } from "date-fns";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useBlogStore } from "@/stores/apps/blog";
import { Icon } from "@iconify/vue";
import Card from "@/components/ui/card/Card.vue";
import Badge from "@/components/ui/badge/Badge.vue";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import Separator from "@/components/ui/separator/Separator.vue";
import addCommnet from "./addCommnet.vue";
import AspectRatio from "@/components/ui/aspect-ratio/AspectRatio.vue";

const title = useRoute();
const getTitle = title.path.split("/").pop();

onMounted(() => {
  store.fetchPost(`${getTitle}`);
  store.fetchPosts();
});
const store = useBlogStore();

const post = computed(() => {
  return store.selectedPost;
});

const formattedDate = computed(() => {
  if (!post.value?.createdAt) return "";
  return format(new Date(post.value.createdAt), "E, MMM d");
});
</script>
<template>
  <div class="flex flex-col gap-6">
    <Card class="p-0 rounded-md overflow-hidden group">
      <AspectRatio :ratio="16 / 6" class="relative overflow-hidden">
        <img
          :src="post?.coverImg"
          alt="Image"
          class="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
        />
        <Badge variant="white" class=" absolute bottom-6 end-6 rounded-md">
          2 min read
        </Badge>
      </AspectRatio>

      <div class="p-6 pt-0 flex flex-col gap-6">
        <div class="flex flex-col gap-2 -mt-6">
          <Avatar v-if="post?.author?.avatar" class="h-10 w-10">
  <AvatarImage :src="post.author.avatar" alt="user" />
  <AvatarFallback>CM</AvatarFallback>
</Avatar>
          <Badge variant="muted" class="mt-3 rounded-md">{{ post.category }}</Badge>
        </div>

        <h4 class="font-semibold text-3xl">{{ post.title }}</h4>
        <div class="flex justify-between">
          <div class="flex gap-4">
            <div class="flex items-center gap-2 text-darklink text-[15px]">
              <Icon icon="solar:eye-outline" class="size-4 text-ld"></Icon>
              {{ post.view }}
            </div>
            <div class="flex items-center gap-2 text-darklink text-[15px]">
              <Icon
                icon="solar:chat-line-linear"
                class="size-4 text-ld"
              ></Icon>
              {{ post.comments?.length }}
            </div>
          </div>
          <div>
            <div class="flex items-center gap-2 text-darklink text-[15px]">
              <Icon icon="tabler:point" class="size-4 text-ld"></Icon>
              {{ formattedDate }}
            </div>
          </div>
        </div>
      </div>

      <Separator />
      <div class="p-6">
        <h2 class="text-xl font-semibold">Title of the paragraph</h2>
        <p class="my-4 text-sm text-darklink">
          But you cannot figure out what it is or what it can do. MTA web
          directory is the simplest way in which one can bid on a link, or a few
          links if they wish to do so. The link directory on MTA displays all of
          the links it currently has, and does so in alphabetical order, which
          makes it much easier for someone to find what they are looking for if
          it is something specific and they do not want to go through all the
          other sites and links as well. It allows you to start your bid at the
          bottom and slowly work your way to the top of the list.
        </p>
        <p class="my-4 text-sm text-darklink">
          Gigure out what it is or what it can do. MTA web directory is the
          simplest way in which one can bid on a link, or a few links if they
          wish to do so. The link directory on MTA displays all of the links it
          currently has, and does so in alphabetical order, which makes it much
          easier for someone to find what they are looking for if it is
          something specific and they do not want to go through all the other
          sites and links as well. It allows you to start your bid at the bottom
          and slowly work your way to the top of the
        </p>
        <p class="text-sm font-bold">This is strong text.</p>
        <p class="text-sm italic">This is italic text.</p>
        <Separator class="my-6" />
        <h3 class="text-lg font-semibold">Unorder list.</h3>
        <ul class="ml-10 mt-3 list-disc">
          <li class="text-sm text-darklink">Gigure out what it is or</li>
          <li class="text-sm text-darklink">The links it currently</li>
          <li class="text-sm text-darklink">It allows you to start your bid</li>
          <li class="text-sm text-darklink">Gigure out what it is or</li>
          <li class="text-sm text-darklink">The links it currently</li>
          <li class="text-sm text-darklink">It allows you to start your bid</li>
        </ul>
        <Separator class="my-6" />
        <h3 class="text-lg font-semibold">Order list.</h3>
        <ol class="ml-10 mt-3 list-decimal">
          <li class="text-sm text-darklink">Gigure out what it is or</li>
          <li class="text-sm text-darklink">The links it currently</li>
          <li class="text-sm text-darklink">It allows you to start your bid</li>
          <li class="text-sm text-darklink">Gigure out what it is or</li>
          <li class="text-sm text-darklink">The links it currently</li>
          <li class="text-sm text-darklink">It allows you to start your bid</li>
        </ol>
        <Separator class="my-6" />
        <h3 class="text-lg font-semibold">Quotes</h3>
        <div
          class="flex font-bold mt-4 bg-muted/10 py-5 px-4 rounded-md border-s-3 border-primary text-ld"
        >
          <Icon icon="meteor-icons:quote-left" class="size-4 me-2" /> Life is
          short, Smile while you still have teeth!
        </div>
      </div>
    </Card>

    <Card>
      <div class="flex gap-2 items-center mb-3">
        <h3 class="text-lg font-semibold">Comments</h3>
        <span
          class="h-5 w-5 flex justify-center rounded-full bg-primary text-white text-xs items-center font-medium"
          >{{ post.comments?.length }}</span
        >
      </div>
      <template v-for="(comments) in post.comments" :key="post.id">
        <addCommnet :comments="comments" />
      </template>
    </Card>
  </div>
</template>
