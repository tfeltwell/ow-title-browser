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
      const pageSize = ref(10);
      const pagePos = ref(0);

      return {
        pageSize,
        pagePos
      };
    },
    methods: {
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
        // increase if new pagePos will be less than < getAllTitles.length
        if ((this.pagePos + this.pageSize) < this.getAllTitles.length) {
          this.pagePos += this.pageSize;
        }
      }
    },

    mounted() {
      this.$store.dispatch('loadData')
    },

    computed: {
      ...mapGetters([
        'getAllTitles'
      ]),
      currentPage() {
        return this.getAllTitles ? 
          this.getAllTitles.slice(this.pagePos, (this.pagePos+this.pageSize)) : {};
      }
    }
    
  }
</script>
