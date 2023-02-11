<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn to="/list">Back</v-btn>
      </v-col>
      <v-col>route params: {{ $route.params.id }}</v-col>
      <v-col>{{ titleDetails }}</v-col>
    </v-row>
    <v-row>
      <v-col>
        <TitleDetails 
          :details="{
            number: titleDetails['Title Number'],
            tenure: titleDetails['Tenure']
          }"
        />
      </v-col>
      <v-col>
        <TitleMapView 
          :x="titleDetails['X']" 
          :y="titleDetails['Y']" 
          :address="titleDetails['Property Address']" 
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TitleDetails from '../components/TitleDetails.vue';
import TitleMapView from '../components/TitleMapView.vue';
import store from '@/store'

  export default {
    name: "TitleView",
    components: {
      TitleDetails,
      TitleMapView
    },
    data () {
      return {
        titleDetails: {}
      }
    },
    methods: {
      async fetchTitle() {
        console.log('Fetching new data for', this.$route.params.id.toString());
        const routeId = this.$route.params.id.toString();
        this.titleDetails = store.getters.getTitleByTitleNumber(routeId);
        console.log(this.titleDetails['Title Number']);
      }
    },
    mounted() {
      this.fetchTitle();
    }
  }
</script>
