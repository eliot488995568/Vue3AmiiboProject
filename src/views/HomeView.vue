<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <section id="banner">
    <header>
      <h2>Hey.Bienvenue sur ma collection</h2>
    </header>
  </section>

  <section id="intro" class="container">
    <div class="row">
      <div class="col-4 col-12-medium">
        <section class="middle">
          <img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png" />
          <header>
            <h2>character</h2>
          </header>
          <p>gameSeries</p>
        </section>
      </div>
      <div class="col-4 col-12-medium">
        <section class="middle">
          <img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png" />
          <header>
            <h2>character</h2>
          </header>
          <p>gameSeries</p>
        </section>
      </div>
      <div class="col-4 col-12-medium">
        <section class="middle">
          <img src="https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png" />
          <header>
            <h2>character</h2>
          </header>
          <p>gameSeries</p>
        </section>
      </div>
    </div>
    <footer>
      <ul class="actions">
        <li><RouterLink to="/liste" class="button large">Liste complète</RouterLink></li>
      </ul>
    </footer>
  </section>
</template>
