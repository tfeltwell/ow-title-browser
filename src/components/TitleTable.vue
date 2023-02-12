<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Title number 
          <v-icon color="green darken-2">
            mdi-sort-alphabetical-ascending
          </v-icon>
        </th>
        <th class="text-left">
          Class of title
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="title in getAllTitles" 
        :key="title['Title Number']" 
        item-class="table-row"
        @click="redirectDetail(title['Title Number'])"
      >
        <td>{{ title['Title Number'] }}</td>
        <td>{{ title['Tenure'] }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import { ref } from "vue";
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

  methods: {
    async fetchData() {
      this.loading = true;
      const options = {method: 'GET'};

      fetch('https://owfetechtask.blob.core.windows.net/titledata/testdata.json', options)
        .then(response => response.json())
        .then(response => this.$store.commit('initTitles', response))
        .catch(err => console.error(err));
    },
    redirectDetail(titleNumber) {
      this.$router.push({ path: '/titles/'+titleNumber });
    }
  },

  mounted() {
    this.fetchData();
  },

  computed: {
    ...mapGetters([
      'getAllTitles'
    ])
  }
}
</script>

<style>
.table-row:hover {
  background-color: blue;
}
</style>

