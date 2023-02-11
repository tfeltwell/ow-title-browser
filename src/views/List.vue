<template>
  <v-container>
    <v-row>
      <v-col>
        <TitleTable />
      </v-col>
    </v-row>
    <TitlePagination />
  </v-container>

</template>

<script setup>
  import TitleTable from '../components/TitleTable.vue';
  import TitlePagination from '../components/TitlePagination.vue';
</script>
