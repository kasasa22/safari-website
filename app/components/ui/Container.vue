<template>
  <div :class="containerClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'lg',
  padding: true
})

const containerClasses = computed(() => [
  'container',
  `container--${props.size}`,
  {
    'container--padding': props.padding
  }
])
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
}

.container--padding {
  padding: 0 var(--spacing-md);
}

.container--sm {
  max-width: 640px;
}

.container--md {
  max-width: 768px;
}

.container--lg {
  max-width: 1024px;
}

.container--xl {
  max-width: 1280px;
}

.container--full {
  max-width: none;
}

@media (min-width: 640px) {
  .container--padding {
    padding: 0 var(--spacing-lg);
  }
}

@media (min-width: 1024px) {
  .container--padding {
    padding: 0 var(--spacing-xl);
  }
}
</style>