<template>
  <v-container>
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
    <v-row v-for="title in titles" :key="title.title_number" >
      <v-col>
        {{ title.title_number }}
      </v-col>
      <v-col>
        <router-link :to="'/titles/'+title.title_number">{{ title.class }}</router-link>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "TitleTable",
  setup() {
    // const data = ref(null);
    // const loading = ref(true);
    // const error = ref(null);

    // function fetchData() {
    //   // Implement next
    // };
    // onMounted(() => {
    //   fetchData();
    // });
  },
  
  data () {
    return {
      // data,
      // loading,
      // error,
      titles: [
        { title_number: 'content2', class: 'content2class' },
        { title_number: 'content1', class: 'content1class' },
        { title_number: 'content3', class: 'content3class' },
      ]
    }
  }
}
</script>


<style scoped>

</style>

