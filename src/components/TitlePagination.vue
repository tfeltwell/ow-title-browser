<template>
  <v-row>
    <v-col>
      <v-btn @click="decreasePage()">Previous Page</v-btn>
    </v-col>
    <v-col>
      <v-btn @click="increasePage()">Next Page</v-btn>
    </v-col>
  </v-row>
</template>

<script>

export default {
  methods: {
    decreasePage() {
      this.$emit("updatePagePos", -1);
    },
    increasePage() {
      this.$emit("updatePagePos", 1);
    }
  }
}
</script>

<style scoped>

</style>

