<template>
  <v-app dark class="bg-background ">
    <Navbar/>
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<style>
html {
  background: #000000;
}

p, ul, li, a {
  font-size: 1.2rem;
  line-height: 180%;
}
</style>