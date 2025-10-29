<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import Card from '@/components/ui/card/Card.vue'

import { RouterLink } from 'vue-router'

import {TopCardInfo}  from '../../../_mockApis/dashboardData/modernData'


</script>

<template>
  <div>
    <Swiper
      :modules="[Autoplay]"
      :slides-per-view="6"
      spaceBetween="24"
     :loop=true
      freeMode
    :speed="5000"
      grabCursor
      :autoplay="{ delay: 0, disableOnInteraction: false }"
      :breakpoints="{
        0: { slidesPerView: 1, spaceBetween: 10 },
        640: { slidesPerView: 2, spaceBetween: 14 },
        768: { slidesPerView: 3, spaceBetween: 18 },
        1030: { slidesPerView: 4, spaceBetween: 18 },
        1200: { slidesPerView: 6, spaceBetween: 24 }
      }"
      class="mySwiper"
    >
      <SwiperSlide v-for="item in TopCardInfo" :key="item.key">
        <RouterLink :to="item.url">
          <Card :class="`${item.bgcolor} w-full border-none shadow-none`">
            <div class="text-center hover:scale-105 transition-all ease-in-out">
              <div class="flex justify-center">
                <img
                  :src="item.img"
                  width="50"
                  height="50"
                  class="mb-3"
                  alt="card-image"
                />
              </div>
              <p :class="`font-semibold ${item.textclr} mb-1`">{{ item.title }}</p>
              <h5 :class="`text-lg font-semibold ${item.textclr} mb-0`">{{ item.desc }}</h5>
            </div>
          </Card>
          
        </RouterLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>
