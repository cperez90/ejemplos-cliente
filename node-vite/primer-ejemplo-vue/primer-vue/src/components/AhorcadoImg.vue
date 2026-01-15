<template>
  <img :src="src" alt="ahorcado" style="max-width: 220px; height: auto;" />
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  errores: { type: Number, required: true },
  maxErrores: { type: Number, required: true },
});

const src = computed(() => {
  const n = Math.min(props.errores, props.maxErrores);
  return `public/img/${n}.PNG`;
});
</script>
