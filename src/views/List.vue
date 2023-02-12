<template>
  <v-container>
    <v-row>
      <v-col>
        <TitleTable :titleData="currentPage"/>
      </v-col>
    </v-row>
    <TitlePagination />
  </v-container>

</template>

<script lang="js">
  import TitleTable from '../components/TitleTable.vue';
  import TitlePagination from '../components/TitlePagination.vue';
  import { ref } from "vue";
  import { mapGetters } from 'vuex'

  export default {
    components: {
      TitleTable,
      TitlePagination
    },
    setup() {
      const data = ref(null);
      const loading = ref(true);
      const error = ref(null);
      const pageSize = 10;
      let pagePos = 0;

      return {
        data,
        loading,
        error,
        pageSize,
        pagePos
      };
    },
    methods: {
      async fetchData() {
        this.loading = true;
        const options = {method: 'GET'};
        console.log('fetching inside list.vue');

        fetch('https://owfetechtask.blob.core.windows.net/titledata/testdata.json', options)
          .then(response => response.json())
          .then((response) => {
            this.$store.commit('initTitles', response)
            this.data = response;
            this.loading = false;
          })
          .catch(err => console.error(err));
      },
      redirectDetail(titleNumber) {
        this.$router.push({ path: '/titles/'+titleNumber });
      },
      // paginateData() {
      //   // return data array, selected from pagePos to pagePos+9 
      //   // (or the end of the array)
        
      //   if(this.data) {
      //     this.data.slice(0,9);
      //     console.log('sliced currentData');
      //   }
      // },
      decreasePage() {
        // decrease page if not aleady at 0
      },
      increasePage() {
        // increase page if pagePos + pageSize < data.length
      }
    },

    mounted() {
      this.fetchData();
    },

    computed: {
      ...mapGetters([
        'getAllTitles'
      ]),
      currentPage() {
        if (this.data) {
          return this.data.slice(this.pagePos,this.pagePos+this.pageSize);
          // return this.data.slice(0, 9);
        }
        return {}
      }
    }
  }
</script>
