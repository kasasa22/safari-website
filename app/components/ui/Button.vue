<template>
  <component
    :is="tag"
    :class="buttonClasses"
    :disabled="disabled"
    :type="type"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  tag?: string
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  tag: 'button',
  type: 'button'
})

const buttonClasses = computed(() => [
  'btn',
  `btn--${props.variant}`,
  `btn--${props.size}`,
  {
    'btn--disabled': props.disabled,
    'btn--loading': props.loading
  }
])
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  font-family: var(--font-family-primary);
  font-weight: 600;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  white-space: nowrap;
  user-select: none;
}

.btn:focus {
  outline: 2px solid var(--color-golden-yellow);
  outline-offset: 2px;
}

.btn--sm {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
}

.btn--md {
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--font-size-base);
}

.btn--lg {
  padding: var(--spacing-lg) var(--spacing-xl);
  font-size: var(--font-size-lg);
}

.btn--primary {
  background-color: var(--color-forest-green);
  color: var(--color-white);
  border-color: var(--color-forest-green);
}

.btn--primary:hover:not(:disabled) {
  background-color: var(--color-forest-green-light);
  border-color: var(--color-forest-green-light);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn--secondary {
  background-color: var(--color-golden-yellow);
  color: var(--color-charcoal);
  border-color: var(--color-golden-yellow);
}

.btn--secondary:hover:not(:disabled) {
  background-color: var(--color-golden-yellow-dark);
  border-color: var(--color-golden-yellow-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn--outline {
  background-color: transparent;
  color: var(--color-forest-green);
  border-color: var(--color-forest-green);
}

.btn--outline:hover:not(:disabled) {
  background-color: var(--color-forest-green);
  color: var(--color-white);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn--ghost {
  background-color: transparent;
  color: var(--color-forest-green);
  border-color: transparent;
}

.btn--ghost:hover:not(:disabled) {
  background-color: var(--color-light-beige);
  transform: translateY(-2px);
}

.btn--disabled,
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
  box-shadow: none !important;
}

.btn--loading {
  cursor: wait;
  opacity: 0.8;
}
</style>