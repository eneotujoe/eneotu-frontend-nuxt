<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
let light = reactive({ value:'true' })
function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const toggleIcon = computed(() => ({
  light: theme.global.current.value.dark
}))
</script>

<template>
    <v-btn
        @click="toggleTheme"
        icon 
        variant="outlined" 
        class="text-primary"
    >
        <v-icon>
            {{ toggleIcon.light ? '$sun' : '$moon' }}
        </v-icon>
    </v-btn>
</template>
  