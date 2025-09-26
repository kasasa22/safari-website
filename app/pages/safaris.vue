<template>
  <div class="safaris-page">
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">Our Safaris</h1>
        <p class="page-subtitle">Choose Your Adventure</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Our Safaris - Safari Adventures',
  meta: [
    {
      name: 'description',
      content: 'Explore our range of safari packages and wildlife tours across Africa. From luxury lodges to camping adventures.'
    }
  ]
})
</script>

<style scoped>
.page-header {
  background-color: var(--color-light-beige);
  padding: var(--spacing-4xl) 0;
  text-align: center;
}

.page-title {
  color: var(--color-forest-green);
  margin-bottom: var(--spacing-md);
}

.page-subtitle {
  color: var(--color-charcoal);
  font-size: var(--font-size-lg);
  opacity: 0.8;
}
</style>