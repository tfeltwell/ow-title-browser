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
      <tr v-for="title in data" 
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
import { reactive } from "vue";

export default {
  name: "TitleTable",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  // Todo refactor - not using titleData anymore
  setup(props) {
    const titleData = reactive(props.data);

    return { titleData };
  },
  methods: {
    redirectDetail(titleNumber) {
      this.$router.push({ path: '/titles/'+titleNumber });
    },
  }
}
</script>

<style>
.table-row:hover {
  background-color: blue;
}
</style>

