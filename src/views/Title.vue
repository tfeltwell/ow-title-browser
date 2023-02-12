<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn to="/list">Back</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <TitleDetails 
          :details="{
            number: detail['Title Number'],
            tenure: detail['Tenure']
          }"
        />
      </v-col>
      <v-col>
        <MapPane
          :x="detail['X']" 
          :y="detail['Y']" 
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js">
import TitleDetails from '../components/TitleDetails.vue';
import MapPane from '../components/MapPane.vue';
import { mapGetters } from 'vuex'

  export default {
    name: "TitleView",
    components: {
      TitleDetails,
      MapPane,
    },
    computed: {
      ...mapGetters([
        'isDataLoaded',
      ]),
      detail() {
        return this.$store.getters.getTitleByTitleNumber(this.$route.params.id.toString())
      },
    },
    methods: {
      checkData() {
        if (!this.isDataLoaded) {
          this.$store.dispatch('loadData');
          console.log('data not loaded, dispatching');
        }
      },
    },
    mounted() {
      this.checkData()
    }
  }
</script>
