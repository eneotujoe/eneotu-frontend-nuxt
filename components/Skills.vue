<script setup>

const skills = [
  { name: 'Javascript' },
  { name: 'Python' },
  { name: 'C++' },
  { name: 'Django Rest Framework' },
  { name: 'GraphQL' },
  { name: 'VueJS' },
  { name: 'NuxtJS' },
  { name: 'ReactJS' },
  { name: 'NumPy' },
  { name: 'Pandas' },
  { name: 'Matplotlib' },
  { name: 'TensorFlow' },
  { name: 'PyTorch' },
  { name: 'Postgres' },
  { name: 'AWS' },
  { name: 'Docker' },
  { name: 'Adobe XD' },
  { name: 'Figma' },
  { name: 'Django' },
  { name: 'Solidworks' },
]

</script>

<template>
    <v-container>
        <v-row justify="center" class="py-16">
            <v-col cols="12">
                <h1 class="text-primary text-center">Skills</h1>
            </v-col>
            <v-col cols="12" md="9" class="text-center">
                <v-btn
                    v-for="skill in skills"
                    :key="skill.name"
                    variant="outlined"
                    class="text-primary ma-1"
                >
                    {{ skill.name }}
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
