<script setup>
import {ref} from "vue";

const x = ref('hello world');
//Reactiva
/*
1) Vue actualiza la variable a tod0 el component
 */
</script>

<template>
<h1>{{x}}</h1>
  <p v-if="x==='adeu'">Adeu, se ha acabado la clase</p>
  <input v-model="x">

</template>

<style scoped>

</style>