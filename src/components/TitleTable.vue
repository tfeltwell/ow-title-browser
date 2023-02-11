<template>
  <v-container>
    <v-row>
      <v-col>
        <p v-if="loading">
          Still loading...
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Title number 
        <v-icon
          color="green darken-2"
        >
          mdi-sort-alphabetical-ascending
        </v-icon>
      </v-col>
      <v-col>
        Class of title
      </v-col>
    </v-row>
    <v-row v-for="title in getAllTitles" :key="title['Title Number']" >
      <v-col>
        {{ title['Title Number'] }}
      </v-col>
      <v-col>
        <router-link :to="'/titles/'+title['Title Number']">
          {{ title['Tenure'] }}
        </router-link>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import { ref, computed } from "vue";
import { mapGetters } from 'vuex'

export default {
  name: "TitleTable",
  setup() {
    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    return {
      data,
      loading,
      error
    };
  },

  // mounted() {    console.log(this.$store.state.titleList) },

  methods: {
    async fetchData() {
      this.loading = true;
      const options = {method: 'GET'};

      fetch('https://owfetechtask.blob.core.windows.net/titledata/testdata.json', options)
        .then(response => response.json())
        .then(response => this.$store.commit('initTitles', response))
        .catch(err => console.error(err));
    }
  },

  mounted() {
    this.fetchData();
  },
  
  data () {
    return {
      titles: [
        { title_number: 'content2', class: 'content2class' },
        { title_number: 'content1', class: 'content1class' },
        { title_number: 'content3', class: 'content3class' },
      ]
    }
  },

  computed: {
    ...mapGetters([
      'getAllTitles'
    ])
  }
}
</script>

<style scoped>

</style>

