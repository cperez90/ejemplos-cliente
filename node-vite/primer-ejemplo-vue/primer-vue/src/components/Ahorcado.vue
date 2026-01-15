<template>
  <section style="display: grid; gap: 16px; max-width: 700px;">
    <HangmanImage :errores="errores" :max-errores="maxErrores" />

    <Palabra
        :palabra="palabra"
        :letras-correctas="letrasCorrectas"
        :reveal="hasPerdido"
    />

    <p v-if="hasGanado" style="font-weight: 700;">Has ganado!</p>
    <p v-else-if="hasPerdido" style="font-weight: 700;">Has perdido!</p>

    <Letras
        :estado-letras="estadoLetras"
        :disabled="hasGanado || hasPerdido"
        @guess="comprobarLetra"
    />

    <div style="display:flex; gap: 8px; align-items:center;">
      <button @click="nuevaPartida">Nueva partida</button>
      <small>Errores: {{ errores }} / {{ maxErrores }}</small>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import HangmanImage from "./AhorcadoImg.vue";
import Palabra from "./Palabra.vue";
import Letras from "./Letras.vue";

const palabras = ["vaca", "silla", "informatica", "galletas", "perezoso", "oi"];

const maxErrores = 7;

const palabra = ref("");
const errores = ref(1);

const letrasCorrectas = ref(new Set());
const estadoLetras = ref({});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cogerPalabra() {
  return palabras[getRndInteger(0, palabras.length - 1)];
}

const letrasUnicas = computed(() => new Set(palabra.value.split("")));

const hasGanado = computed(() => {
  for (const l of letrasUnicas.value) {
    if (!letrasCorrectas.value.has(l)) return false;
  }
  return palabra.value.length > 0;
});

const hasPerdido = computed(() => errores.value >= maxErrores);

function comprobarLetra(letra) {
  if (hasGanado.value || hasPerdido.value) return;
  if (estadoLetras.value[letra]) return;

  const acierto = palabra.value.includes(letra);

  if (acierto) {
    estadoLetras.value = { ...estadoLetras.value, [letra]: "hit" };
    letrasCorrectas.value.add(letra);
    letrasCorrectas.value = new Set(letrasCorrectas.value);
  } else {
    estadoLetras.value = { ...estadoLetras.value, [letra]: "miss" };
    errores.value = Math.min(errores.value + 1, maxErrores);
  }
}

function nuevaPartida() {
  palabra.value = cogerPalabra();
  errores.value = 1;
  letrasCorrectas.value = new Set();
  estadoLetras.value = {};
}

nuevaPartida();
</script>