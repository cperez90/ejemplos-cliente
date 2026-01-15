<template>
  <div style="font-size: 28px; letter-spacing: 6px;">
    <span v-for="(ch, i) in chars" :key="i">
      {{ mostrar(ch) }}
    </span>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  palabra: { type: String, required: true },
  letrasCorrectas: { type: Object, required: true }, // Set
  reveal: { type: Boolean, default: false },
});

const chars = computed(() => props.palabra.split(""));

function mostrar(ch) {
  if (props.reveal) return ch;
  return props.letrasCorrectas.has(ch) ? ch : "_";
}
</script>
