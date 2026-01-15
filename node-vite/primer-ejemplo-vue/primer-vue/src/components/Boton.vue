<script setup>
import router from "@/router/index.js";
import {ref} from "vue";

const props = defineProps({
  nombre: {
    type: String,
    required: true
  },
  descripcion:{
    type: String,
    required: false
  }

})

const emit = defineEmits(['pitjar'])

const nomPersona = ref("Pep")

function redireccionar(){
  console.log("Has hecho click en redireccionar")
  router.push({ name: "About"});
}

function saluda() {
  emit('pitjar',nomPersona.value)
}
</script>

<template>
  <div>
    <p>Inicio del boton</p>
    <button @click="saluda">{{nombre}}</button>
    <p v-if="descripcion">{{descripcion}}</p>
    <slot></slot>
    <input v-model="nomPersona">
    <p>Hijo del boton</p>
  </div>
</template>

<style scoped>
button{
  background: red;
}
</style>