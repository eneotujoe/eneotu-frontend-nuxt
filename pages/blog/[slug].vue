<script setup>
import readingTime from 'reading-time/lib/reading-time'
import useMedia from '~~/composables/useMedia'

const { $dayjs } = useNuxtApp()
const route = useRoute()
const { findOne } = useStrapi()

const response = await findOne('articles', `?filters[slug][$eq]=${route.params.slug}&populate=image&populate=author`)
const article = response.data[0]
const stats = readingTime(article.attributes.content)

const content = ref('')
content.value = useNuxtApp().$mdit.render(article.attributes.content) || article.attributes.content
const seo = reactive({
  metaTitle: article.attributes.title,
  metaDescription: article.attributes.description,
  shareImage: article.attributes.image,
  author: article.attributes.author.data.attributes.name ,
})
// console.log(seo)
// useHead({
//     titleTemplate: (titleChunk) => {return titleChunk ? `${seo.metaTitle} | ${titleChunk}` : 'Eneotu'},
//     meta: getMetaTags(seo),
//   })

const title =ref('Blog')
const description =ref('Blog post on artificial intelligence and software engineering')

if (!response) {
  throw createError({ statusCode: 404, statusMessage: 'error', message: 'error', fatal: true })
}

</script>

<template>
  <v-layout class="bg-surface mx-n5 mt-n4 pb-10">
    <v-row justify="center" class="ma-3 ma-md-15">
      <v-col cols="12" md="4">
        <h1 
          v-if="article.attributes.title"
        >
          {{ article.attributes.title }}
        </h1>

        <p
          v-if="article.attributes.publishedAt"
          class="text-grey-darken-2"
        >
          {{ $dayjs(article.attributes.publishedAt).format('DD MMMM YYYY') }}
        </p>

        <p
          v-if="stats.text"
          class="text-grey-darken-2"
        >
          {{ stats.text }}
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
        <br>
        <h5
          v-if="article.attributes.author.data.attributes.name"
          class="text-grey-darken-2"
        >
          Author: {{ article.attributes.author.data.attributes.name }}
        </h5>
      </v-col>
    </v-row>
  </v-layout>
  <MetaTags 
    :title="article.attributes.title"
    :description="article.attributes.description"
    :image="article.attributes.image.data.attributes.url"
    :author="article.attributes.author.data.attributes.name"
  />
</template>
  
<style scoped>
.ul-style-inside {
  list-style-position: inside;
}
</style>