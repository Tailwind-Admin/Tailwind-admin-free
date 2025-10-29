<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LightLogo from '../../../assets/images/logos/light-logo.svg';
</script>
<template>
    <div class="logo lh-normal">
        <RouterLink to="/">
            <img :src="LightLogo" alt="home" />
        </RouterLink>
    </div>
</template>