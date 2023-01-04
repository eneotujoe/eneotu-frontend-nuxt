<script setup>
const siteName = useSiteName()
</script>

<template>
    <footer class="py-15">
        <v-row justify="center" class="my-15">
            <v-col cols="12">
                <SocialLinks />
            </v-col>
        </v-row>
        <v-row justify="center" class="my-10" no-gutters>
            <v-col class="text-center text-primary font-weight-thin my-10" cols="12">
                &copy; {{ new Date().getFullYear() }} - {{ siteName }}
            </v-col>
        </v-row>
    </footer>
</template>
