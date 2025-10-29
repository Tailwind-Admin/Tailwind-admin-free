<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LogoIcon from '../../../assets/images/logos/logo-icon.svg';
</script>
<template>
    <div class="logo lh-0">
        <RouterLink to="/">
            <img :src="LogoIcon" alt="home" height="35"/>
        </RouterLink>
    </div>
</template>