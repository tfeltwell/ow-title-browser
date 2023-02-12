<template>
  <GoogleMap :api-key="mapKey" style="width: 100%; height: 500px" :center="center" :zoom="18">
    <Marker :options="{ position: center }" />
  </GoogleMap>
  lat: {{ y }} lng: {{ x }}
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

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
});
</script>