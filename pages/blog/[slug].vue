<script setup>
import readingTime from 'reading-time/lib/reading-time'
import useMedia from '~~/composables/useMedia'
import { getMetaTags } from "../../composables/useMetaTags"

const { $dayjs } = useNuxtApp()
const route = useRoute()
const { findOne } = useStrapi()

const response = await findOne('articles', `?filters[slug][$eq]=${route.params.slug}&populate=image&populate=author`)
const article = response.data[0]
const stats = readingTime(article.attributes.content)

const content = ref('')
content.value = useNuxtApp().$mdit.render(article.attributes.content) || article.attributes.content
// console.log(response)
const seo = reactive({
  metaTitle: article.attributes.title,
  metaDescription: article.attributes.description,
  shareImage: article.attributes.image,
})

useHead({
  titleTemplate: '%s | Eneotu',
  title: seo.metaTitle,
  meta: getMetaTags(seo),
})

if (!response) {
  throw createError({ statusCode: 404, statusMessage: 'error', message: 'error', fatal: true })
}
</script>

<template>
  <v-layout class="bg-surface mx-n5 mt-n4">
    <v-row justify="center" class="ma-3 ma-md-15">
      <v-col cols="12" md="4">
        <h1 
          v-if="article.attributes.title"
        >
          {{ article.attributes.title }}
        </h1>

        <i
          v-if="article.attributes.publishedAt"
          class="mr-10"
        >
          {{ $dayjs(article.attributes.publishedAt).format('DD MMMM YYYY') }}
        </i>

        <i
          v-if="stats.text"
        >
          {{ stats.text }}
        </i>
        <p
          v-if="article.attributes.author.data.attributes.name"
          class="text-secondary"
        >
          {{ article.attributes.author.data.attributes.name }}
        </p>
      </v-col>

      <v-col cols="12" md="6">
        <v-img
          v-if="article.attributes.image.data.attributes.url"
          :src="useMedia(article.attributes.image.data.attributes.url)"
        />
      </v-col>

      <v-col cols="12" md="10" class="pt-5">
        <div
          v-if="article.attributes.content"
          v-html="content"
          class="ul-style-inside"
        ></div>
      </v-col>
    </v-row>
  </v-layout>
</template>
  
<style scoped>
.ul-style-inside {
  list-style-position: inside;
}
</style>