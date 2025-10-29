<script setup lang="ts">
import {  onMounted, computed } from "vue";
import { useBlogStore } from "@/stores/apps/blog";
import blogCardGrid from "./blogCardGrid.vue";
import featureBlogCard from "./featureBlogCard.vue";
const store = useBlogStore();

onMounted(() => {
  store.fetchPosts();
});

const getPosts = computed(() => {
  return store.blogposts;
});

const filterFeaturedpost = computed(() => {
  return getPosts.value.filter((post) => {
    return post.featured;
  });
});
</script>
<template>
  <div class="grid grid-cols-12 gap-6">
    <template v-for="(post, i) in filterFeaturedpost" :key="post.id">
      <featureBlogCard :post="post" :index="i" />
    </template>
    <template v-for="(post) in getPosts" :key="post.id">
      <blogCardGrid :post="post" />
    </template>
  </div>
</template>
