<template>
  <v-container>
    <v-row>
      <v-col>
        <TitleTable :data="currentPage"/>
      </v-col>
    </v-row>
    <TitlePagination @updatePagePos="updatePagePos" />
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
      const pageSize = ref(10);
      const pagePos = ref(0);

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
      updatePagePos(change) {
        change > 0 ? this.increasePage() : this.decreasePage();
      },  
      decreasePage() {
        // decrease page if not aleady at 0
        if (this.pagePos != 0) {
          if (this.pagePos - this.pageSize <= 0) {
            this.pagePos = 0;
          } else {
            this.pagePos -= this.pageSize;
          }
        }
      },
      increasePage() {
        // increase if new pagePos will be less than < data.length
        if ((this.pagePos + this.pageSize) < this.data.length) {
          this.pagePos += this.pageSize;
        }
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
        return this.data ? 
          this.data.slice(this.pagePos, (this.pagePos+this.pageSize)) : {};
      }
    }
    
  }
</script>
