<script setup>
import router from "@/router/index.js";

defineProps({
  nombre: {
    type: String,
    required: true
  },
  descripcion:{
    type: String,
    required: false
  }

})

function redireccionar(){
  console.log("Has hecho click en redireccionar")
  router.push({ name: "About"});
}
</script>

<template>
  <div>
    <p>Inicio del boton</p>
    <button @click="redireccionar">{{nombre}}</button>
    <p v-if="descripcion">{{descripcion}}</p>
    <slot></slot>
    <p>Hijo del boton</p>
  </div>
</template>

<style scoped>
button{
  background: red;
}
</style>