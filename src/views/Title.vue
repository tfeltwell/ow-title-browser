<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn to="/list">Back</v-btn>
      </v-col>
      <v-col>{{ $route.params.id }}</v-col>
    </v-row>
    <v-row>
      <v-col>
        <TitleDetails :title_number="$route.params.id" title_class="Freehold"/>
      </v-col>
      <v-col>
        <TitleMapView />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import TitleDetails from '../components/TitleDetails.vue';
  import TitleMapView from '../components/TitleMapView.vue';
</script>
