<script setup>
import qs from 'qs'
import useMedia from '~~/composables/useMedia'

const { find } = useStrapi()
const query = qs.stringify({
  populate: '*', 
}, {
  encodeValuesOnly: true,
});

let articles = await find(`articles?${query}`)

if (!articles) {
  throw createError({ statusCode: 404, statusMessage: 'error', message: 'error', fatal: true })
}

const title =ref('Blog')
const description =ref('Blog post on artificial intelligence and software engineering')

</script>

<template>
  <v-layout class="bg-surface mx-n5 mt-n4">
    <v-row class="ma-3 ma-md-15">
      <v-col
      v-for="article in articles.data"
      :key="article.id"
      cols="12"
      md="4"
      >
        <nuxt-link
          :to="`/blog/${article.attributes.slug}`"
          class="text-decoration-none"
        >
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card
                v-bind="props"
                :color="isHovering ? 'bg-grey-lighten-3': 'grey-lighten-4'"
                elevation="20"
              >
                <v-img
                  v-if="article.attributes.image.data !== null"
                  :src="useMedia(article.attributes.image.data.attributes.url)"
                />      
                <h3
                  v-if="article.attributes.title"
                  class="pa-2"
                >
                  {{ article.attributes.title }}
                </h3>
    
                <v-btn
                  append-icon="$chevronDoubleRight"
                  variant="outlined"
                  class="text-primary-darken-1 text-capitalize font-italic ma-3"
                >
                  Read More
                </v-btn>
              </v-card>
            </template>
          </v-hover>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-layout>
  <MetaTags :title="title" :description="description"/>
</template>

<style scoped>
  .v-card {
    transition: opacity .4s ease-in-out;
  }

  .v-card:not(.on-hover) {
    opacity: 0.9;
  }

</style>