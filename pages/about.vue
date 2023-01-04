<script setup>
const title = ref('About Me')
const description = ref('Eneeotu Joe is an artificial intelligence researcher')

useHead({
    titleTemplate: '%s | Eneotu',
    title: title,
    meta: [{ name: 'description', content: description }],
})

</script>
<template>
    <v-container class="pt-10">
        <v-row justify="center">
            <v-col cols="12" md="9">
                <v-card color="primary" variant="outlined" height="250">
                    <v-card-title class="text-primary text-h5 font-weight-black">{{ title }}</v-card-title>
                    <v-card-text class="text-primary">
                        I’m an artificial intelligence researcher, I have over 4 years of experience in software engineering and a first-class degree in naval electromechanical engineering.
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="12" md="3" class="text-primary">
                <v-card color="primary" variant="outlined" height="250">
                    <v-card-title class="text-primary text-h5 font-weight-black">Education</v-card-title>
                    <v-card-text class="text-primary mx-3">
                        <ul>
                            <li>BSc in Marine Engineering (Naval Electromechanical Engineering)</li>
                            <li>Constanta Maritime Unversity, Romania</li>
                            <i>Final GPA: 10/10</i>
                        </ul>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="3" class="text-primary">
                <v-card color="primary" variant="outlined" height="250">
                    <v-card-title class="text-primary text-h5 font-weight-black">Awards/Achievemennts</v-card-title>
                    <v-card-text class="text-primary">
                        Best Student Award - Constanta Maritime Unversity, Romania
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" md="3" class="text-primary">
                <v-card color="primary" variant="outlined" height="250">
                    <v-card-title class="text-primary text-h5 font-weight-black">Publication</v-card-title>
                    <v-card-text class="text-primary">
                        <NuxtLink href="https://www.ej-eng.org/index.php/ejeng/article/view/1739" class="text-decoration-none text-primary" target="blank">
                            Machine Learning Algorithmic Study of the Naira Exchange Rate
                            <v-icon color="primary">
                                mdi-open-in-new
                            </v-icon>
                        </NuxtLink>
                    </v-card-text>
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>