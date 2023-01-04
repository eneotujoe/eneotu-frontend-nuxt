<script setup>
import { ref } from 'vue'

const title = ref('My Projects')

useHead({ titleTemplate: '%s | Eneotu', title: title })

let links = [
    {url:'https://netflix-pro.netlify.app', title: 'Netflix Frontend Clone', text: 'Built With ReactJS and deployed on netlify'},
    {url:'https://instagram-pro.netlify.app', title: 'Instagram Frontend Clone', text: 'Built With ReactJS and netlify'},
    {url:'https://eneotu.netlify.app', title: 'My Portfolio', text: 'Built with nuxt and netlify'},
    {url:'https://preptask.netlify.app/quiz', title: 'Preptask', text: 'An educational tool built with nuxt, Django, GraphQL, heroku and netlify'},
]
   
</script>

<template>
    <v-container class="pt-10">
        <v-row justify="center">
            <v-col cols="12" md="10">
                <v-card-title class="text-h4 font-weight-black text-primary py-10">{{ title }}</v-card-title>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col
                v-for="(link, i) in links"
                :key="i"
                cols="12"
                md="5"
            >
                <v-card color="primary" height="155">
                    <v-card-text class="text-secondary"> 
                        <nuxt-link
                            class="text-decoration-none text-secondary"
                            :href="link.url"
                        >
                            <h2>{{ link.title }}</h2>
                            <p class="mb-3">{{ link.text }}</p>
                        </nuxt-link>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            :href="link.url"
                            append-icon="mdi-open-in-new"
                            class="bg-secondary text-primary"
                        >
                            View
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
