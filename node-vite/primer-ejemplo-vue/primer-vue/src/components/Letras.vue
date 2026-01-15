<template>
  <div style="display:flex; flex-wrap: wrap; gap: 8px;">
    <button
        v-for="L in letras"
        :key="L"
        :disabled="disabled || !!estadoLetras[toKey(L)]"
        :style="estilo(L)"
        @click="$emit('guess', toKey(L))"
    >
      {{ L }}
    </button>
  </div>
</template>

<script setup>
defineEmits(["guess"]);

const props = defineProps({
  estadoLetras: { type: Object, required: true },
  disabled: { type: Boolean, default: false },
});

const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");

function toKey(L) {
  return L.toLowerCase();
}

function estilo(L) {
  const k = toKey(L);
  const estado = props.estadoLetras[k];

  if (estado === "hit") return { backgroundColor: "green", color: "black" };
  if (estado === "miss") return { backgroundColor: "red", color: "white" };

  return { padding: "8px 10px" };
}
</script>
