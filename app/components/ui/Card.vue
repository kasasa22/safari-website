<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    
    <div class="card-content">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  hover: false
})

const cardClasses = computed(() => [
  'card',
  `card--${props.variant}`,
  `card--padding-${props.padding}`,
  {
    'card--hover': props.hover
  }
])
</script>

<style scoped>
.card {
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: all var(--transition-normal);
}

.card--default {
  border: 1px solid var(--color-silver);
}

.card--elevated {
  box-shadow: var(--shadow-md);
  border: 1px solid transparent;
}

.card--outlined {
  border: 2px solid var(--color-forest-green);
}

.card--hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.card-header {
  padding: var(--spacing-lg);
  border-bottom: 1px solid var(--color-silver);
  background-color: var(--color-light-beige);
}

.card-content {
  flex: 1;
}

.card--padding-none .card-content {
  padding: 0;
}

.card--padding-sm .card-content {
  padding: var(--spacing-md);
}

.card--padding-md .card-content {
  padding: var(--spacing-lg);
}

.card--padding-lg .card-content {
  padding: var(--spacing-xl);
}

.card-footer {
  padding: var(--spacing-lg);
  border-top: 1px solid var(--color-silver);
  background-color: var(--color-light-beige);
}
</style>