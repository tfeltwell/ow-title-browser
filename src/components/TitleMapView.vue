<template>
  <v-sheet
    color="white"
    elevation="1"
  >
    Map
    {{ x }}, {{ y }}
    {{ address }}
  </v-sheet>
</template>

<script setup>
  defineProps({
    x: {
      type: String,
      required: false
    },
    y: {
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    }
  })
</script>

<style scoped>
</style>