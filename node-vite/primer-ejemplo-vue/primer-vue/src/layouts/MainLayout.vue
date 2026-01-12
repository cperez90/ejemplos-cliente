<script setup>
import {RouterView,RouterLink} from "vue-router";
import router from "@/router/index.js";

function redireccionar(){
  console.log("Has hecho click en redireccionar")
  router.push({ name: "About"});
}
</script>

<template>
<h1>Main Layout</h1>
  <div>Header del main</div>
  <div>
    <nav>
      <ul>
        <li>
          <RouterLink to="/admin/hello">Home</RouterLink>
        </li>
        <li><RouterLink to="/about">¿Quienes somos?</RouterLink></li>
      </ul>
    </nav>
  </div>
  <div>
    <button @click="redireccionar">Redireccionar a /about</button>
  </div>
  <div>
    <RouterView />
  </div>
  <div>Footer del main</div>
</template>

<style scoped>
h1{
  color: blue;
}
</style>