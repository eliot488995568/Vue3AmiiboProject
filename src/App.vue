<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <section id="header">
      <h1><a href="index.html">AmiiVue</a></h1>
    <!-- Nav -->
      <nav id="nav">
        <ul>
          <li class="current"><RouterLink to="/">Home</RouterLink></li>
          <!-- <li><a href="left-sidebar.html">Pokémons</a></li> -->
          <li><RouterLink to="/liste">Liste Amiibo</RouterLink></li>
        </ul>
      </nav>
    </section>
  </header>

  

  <RouterView />
</template>

<style scoped>
</style>
