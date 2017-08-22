<style lang="scss">
  @import '../sass/app';
  .event-card__map {
    display: none;
  }
  @media(min-width: 479px ){
    .event-card__map {
      display: block;
    }
  }
</style>

<template>
  <section class="event-card__map">
    <gmap-map
      :center="center"
      :zoom="18"
      style="width: 300px; height: 300px"
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
    name: 'event-card-map',
    props: ['geo'],
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
    },
  };
</script> 