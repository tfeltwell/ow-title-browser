<template>
  <template v-if="isDataLoaded">
    <GoogleMap :api-key="mapKey" style="width: 100%; height: 500px" :center="centre" :zoom="18">
      <Marker :options="{ position: centre }" />
    </GoogleMap>
  </template>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import { mapGetters } from 'vuex'

export default defineComponent({
  props: {
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    },
  },
  components: { 
    GoogleMap,
    // eslint-disable-next-line vue/no-reserved-component-names
    Marker
  },
  setup(props) {
    const center = { lat: parseFloat(props.y), lng: parseFloat(props.x) };
    const mapKey = import.meta.env.VITE_MAPS_KEY
    console.log("center", center);
    return { 
      center,
      mapKey
    };
  },
  computed: {
    ...mapGetters([
        'isDataLoaded',
      ]),
    centre() {
      if (typeof this.y === 'undefined' || typeof this.x === 'undefined') {
        return { lat: 0, lng: 0};
      }
      const value = { lat: parseFloat(this.y), lng: parseFloat(this.x) };
      console.log('computed:', value, this.x, this.y);
      return value;
    }
  }
});
</script>