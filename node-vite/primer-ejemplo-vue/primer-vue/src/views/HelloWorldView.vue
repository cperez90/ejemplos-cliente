<script setup>
import {ref} from "vue";
import Header from "../components/Header.vue";
import boton from "@/components/Boton.vue";

const x = ref('hello world');
//Reactiva
/*
1) Vue actualiza la variable a tod0 el component
 */
const activeColor = ref('red')
</script>

<template>
<!--<h1 v-if="x==='hola'" :style="{color: activeColor}">{{x}}</h1>-->
<h1 :class="{vermell: (x === 'hola')}">{{x}}</h1>
<p v-if="x==='adeu'">Adeu, se ha acabado la clase</p>
  <template v-for="i in 10">
    <input v-model="x">
    <boton :nombre="((x)?x:'Tomeu') + ', Boton rojo a about'" descripcion="Descripcion">
      <p>Esto es parte de un slot</p>
      <table>
        <tr>
          <td>
            Holaaa
          </td>
        </tr>
      </table>
      <span>Fin del slot</span>
    </boton>
    <boton nombre="Pincha si te atreves" />
  </template>
<Header/>
</template>

<style scoped>
.vermell{
  color: red;
}
</style>