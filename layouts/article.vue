<template>
  <v-app dark class="bg-surface">
    <Navbar/>
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>
