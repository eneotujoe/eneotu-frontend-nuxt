<template>
  <v-img class="hero mt-n15">
    <v-row align="center" class="fill-height" no-gutters>
      <v-col cols="12" md="6" class="text-center mx-auto mt-10">
        <v-avatar size="18rem" variant="outlined">
          <v-img src="/eneotu-joe.png" cover/>
        </v-avatar>
      </v-col>

      <v-col cols="12" md="6" class="text-center text-md-left">
        <h1 class="text-h6 text-md-h4 text-surface font-weight-black">
          Artificial Intelligence Researcher
        </h1>
        <v-icon icon="mdi-ampersand"></v-icon>
        <h1 class="text-h6 text-md-h4 text-primary font-weight-thin mb-5">
          Software Engineer
        </h1>

        <v-btn
          size="x-large"
          to="/contact"
          variant="outlined"
          class="text-primary"
        >
          Contact Me
        </v-btn>
      </v-col>

      <div class="overlay"></div>
    </v-row>
  </v-img>
</template>

<style scoped>
.hero {
background: url('/bg.png');
background-size: cover;
height: 100vh;
}
.overlay {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  z-index: -1;
}

</style>
