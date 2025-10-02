<template>
  <NuxtLayout>
    <NuxtPage />
    <Analytics />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<style>
@import '../assets/css/base.css';
</style>
