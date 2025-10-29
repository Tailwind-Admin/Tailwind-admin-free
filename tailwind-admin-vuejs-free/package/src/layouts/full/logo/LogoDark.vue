<script setup lang="ts">
import { RouterLink } from 'vue-router';
import DarkLogo from '../../../assets/images/logos/dark-logo.svg';
</script>
<template>
    <div class="logo lh-normal">
        <RouterLink to="/">
            <img :src="DarkLogo" alt="home" />
        </RouterLink>
    </div>
</template>