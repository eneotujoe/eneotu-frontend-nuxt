<script setup>

const socialLinks = [
    { name: 'Twitter', to: 'https://twitter.com/eneotujoe', icon: '$twitter' },
    { name: 'LinkedIn', to: 'https://www.linkedin.com/in/eneotujoe/', icon: '$linkedin' },
    { name: 'Facebook', to: 'https://web.facebook.com/eneotujoe', icon: '$facebook' },
    { name: 'Instagram', to: 'https://instagram.com/eneotujoe', icon: '$instagram' },
]

</script>

<template>
    <v-row justify="center" no-gutters>
        <v-col class="text-center">
            <v-btn v-for="link in socialLinks"
                :key="link.to"
                :href="link.to"
                :icon="link.icon"
                color="primary"
                variant="outlined"
                class="ma-1"
                target="_blank"
            >
            </v-btn>
        </v-col>
    </v-row>
</template>
