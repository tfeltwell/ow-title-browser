<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>{{ msg }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn to="list">Explore Titles</v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup>
  defineProps({
    msg: {
      type: String,
      required: false
    }
  })
</script>


<style scoped>

</style>

