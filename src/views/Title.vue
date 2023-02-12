<template>
  <v-container>
    <v-row style="border: 1px solid #000;">
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
        <MapPane
          :x="titleDetails['X']" 
          :y="titleDetails['Y']" 
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js">
import TitleDetails from '../components/TitleDetails.vue';
import MapPane from '../components/MapPane.vue';
import store from '@/store'

  export default {
    name: "TitleView",
    components: {
      TitleDetails,
      MapPane,
    },
    computed: {
      id() {
        return this.$route.params.id.toString();
      }
    },
    data () {
      return {
        // titleDetails: store.getters.getTitleByTitleNumber(this.id)
        titleDetails: store.getters.getTitleByTitleNumber(this.$route.params.id.toString())
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
