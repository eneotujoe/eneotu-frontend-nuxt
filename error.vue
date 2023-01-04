<script setup>
const props = defineProps({
error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="6">
                <v-card>
                    <v-card-title>Error {{ error.statusCode }}</v-card-title>
                    <v-card-subtitle> {{ error.message }}</v-card-subtitle>
                    <v-card-actions>
                        <v-btn to="/" class="bg-red">Back To Home Page</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
  