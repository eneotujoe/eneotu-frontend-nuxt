<script setup>
const title = ref('Home')
const description = ref('Artificial intelligence and software engineering blog')

</script>

<template>
  <v-row class="mt-n5 mx-n5">
    <Hero />
    <Skills />
  </v-row>
  <MetaTags :title="title" :description="description"/>
</template>
