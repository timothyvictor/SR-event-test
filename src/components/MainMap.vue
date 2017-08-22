<style lang="scss">
  @import '../sass/app';
  .main-map {
    margin-bottom: $spacing_large;
  }
  .main-map__heading {
    margin: 0 0 0 $spacing_medium;
  }
</style>
<template>
  <section class="main-map">
    <h4 class="main-map__heading">Map</h4>
    <gmap-map
      :center="center"
      :zoom="15"
      style="width: 100%; height: 300px"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </section>
</template>
 
<script>
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCLOYwJ-rRxapgClrjdeVC1FprqNKvoOp4',
      v: '3.2.9',
      libraries: 'places',
    },
  });

  export default {
    props: ['geo'],
    data() {
      return {
        // center: { lat: 10.0, lng: 10.0 },
        // center: this.coords,
        // markers: [{
        //   position: { lat: 10.0, lng: 10.0 },
        // }, {
        //   position: { lat: 11.0, lng: 11.0 },
        // }],
      };
    },
    computed: {
      coords() {
        const latLng = this.geo.split(',');
        return {
          lat: parseFloat(latLng[0]),
          lng: parseFloat(latLng[1]),
        };
      },
      center() {
        return this.coords;
      },
      markers() {
        return [{
          position: this.coords,
        }];
      },
      // lat() {

      // },
      // lng() {

      // },
    },
  };
</script> 