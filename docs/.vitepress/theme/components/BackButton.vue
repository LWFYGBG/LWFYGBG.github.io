<template>
  <a :href="to" class="back-button">
    <span class="back-arrow">←</span>
    <span class="back-text">返回 {{ label }}</span>
  </a>
</template>

<script setup>
defineProps({
  to: { type: String, required: true },
  label: { type: String, required: true },
})
</script>

<style scoped>
.back-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2) !important;
  font-size: 0.88rem;
  text-decoration: none !important;
  transition: all 0.2s;
  margin-bottom: 0.5rem;
}

.back-button:hover {
  color: var(--vp-c-brand-1) !important;
  border-color: var(--vp-c-brand-1);
  transform: translateX(-2px);
}

.back-arrow {
  font-size: 1rem;
}
</style>
