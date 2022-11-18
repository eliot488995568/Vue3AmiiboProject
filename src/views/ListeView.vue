<script setup>
import { onBeforeMount,ref } from 'vue'
import axios from "axios";
const amiibos = ref([]);
const isDataLoading = ref(true)
onBeforeMount(async ()=>{
    console.log('ON BEFORE MOUNT')
    const allAmiibo = await axios.get("https://www.amiiboapi.com/api/amiibo/")
    const {data,status} = allAmiibo // object destructuring FTW!
    if(status===200){
        isDataLoading.value=false
    }
    amiibos.value = data
    console.log(data)
})
</script>

<template>
    <section id="main">
        <div class="container">

            <!-- Content -->
            <article class="box post">

                <header>
                    <h2>Ma Collection</h2>
                    <p>(ici le nombre d'amiibo)</p>
                </header>
                <p>
                <table>
                    <tr>
                        <th>Character</th>
                        <th>game Series</th>
                        <th>Action</th>
                    </tr>
                    <tr v-for="amiibo in amiibos" :key="amiibo.tail">
                        <td>{{ amiibo.character }}</td>
                        <td>{{ amiibo.gameSeries }}</td>
                        <td><RouterLink :to="{name:'ammiboDetails',params:{amiiboId:amiibo.tail}}">Voir</RouterLink></td>
                    </tr>
                </table>
                </p>

            </article>

        </div>
    </section>
</template>

<style>
</style>
