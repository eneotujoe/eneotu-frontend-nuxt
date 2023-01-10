<script setup>
import { ref } from 'vue'

const siteName = useSiteName()

const navLinks = [
  { name: 'Blog', to: '/blog' },
  { name: 'About', to: '/about' },
  { name: 'Project', to: '/project' },
//   { name: 'Contact', to: '/contact' },
]

const drawer = ref(false)

function toggleDrawar(){
    drawer.value = !drawer.value
  }

</script>

<template>
    <v-app-bar flat absolute color="transparent">
        <template v-slot:append>
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
                class="hidden-md-and-up bg-secondary text-primary"
            >
            </v-app-bar-nav-icon>
        </template>


        <nuxt-link to="/" exact class="text-decoration-none d-flex flex-row align-center ml-5">
            <div>
                <v-img
                    alt="logo"
                    contain
                    src="/eneotu-logo.png"
                    transition="scale-transition"
                    width="150"
                    class="shrink"
                />
            </div>
            <!-- <div>
                <v-app-bar-title class="text-primary">{{ siteName }}</v-app-bar-title>
            </div> -->
        </nuxt-link>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn v-for="link in navLinks"
                :key="link.to"
                :to="link.to"
                class="text-primary"
            >
                {{link.name}}
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-btn
            size="large"
            href="https://github.com/eneotujoe"
            variant="outlined"
            class="hidden-sm-and-down text-primary mr-3"
            target="_blank"
            prepend-icon="$github"
        >
            GitHub
        </v-btn>

        <div class="hidden-sm-and-down">
            <ThemeButton />
        </div>

    </v-app-bar>

    <v-navigation-drawer
        temporary
        v-model="drawer"
        location="right"
        color="secondary"
        class="px-2"
    >
        <v-list >
            <v-list-item
                v-for="link in navLinks"
                :key="link.to"
                :to="link.to"
                :title="link.name"
                class="text-primary"
            ></v-list-item>
        </v-list>

        <v-divider class=""></v-divider>

        <ThemeButton />

        <v-btn
            block
            size="large"
            href="https://github.com/eneotujoe"
            variant="outlined"
            class="text-primary mt-3"
            target="_blank"
            prepend-icon="$github"
        >
            GitHub
        </v-btn>
    </v-navigation-drawer>
</template>

