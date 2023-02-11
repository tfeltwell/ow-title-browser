<template>
  <v-card
    elevation="1"
  >
    <v-card-title>
      <h1> {{ details.number }}</h1>
      <v-chip
        color="green"
        text-color="white"
      >
        {{  details.tenure }}
      </v-chip>
    </v-card-title>
    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, voluptatum, quas aliquid ducimus tempore quia inventore unde aut expedita quisquam totam soluta sunt ab quaerat nihil reiciendis, est commodi facilis.

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odio qui ipsum illo aut in ea alias provident eius. Accusamus eum molestias voluptatibus recusandae, minima maiores quaerat saepe quisquam necessitatibus!
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    props: {
      details: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style scoped>
</style>