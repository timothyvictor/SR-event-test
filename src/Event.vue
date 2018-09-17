<style lang="scss">
  @import './sass/app';
  body {
    font-family: $body_font;
    font-size: $font-size_body;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $main_font_colour;
    margin: 0;
    line-height: 1.333334;
  }
  a {
    color: $link_colour;
  }
  .app-wrapper {
    display: flex;
    flex-direction: column;
  }
  .content {
    flex: 1 0 auto;
  }
  .footer {
    height: 200px;
    background-color: $primary_brand;
  }
</style>

<template>
  <div id="app" class="app-wrapper">
    <header class="header">
      <img src="./assets/logo.png" alt="SpareRoom logo">
      <main-nav></main-nav>
    </header>
    <main class="content">
      <event-header :event="event"></event-header>
      <div>
        <booking-form></booking-form> 
        <event-details :event="event"></event-details> 
      </div>
      <main-map :geo="event.location.address.geoloc"></main-map> 
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import MainNav from './components/MainNav';
import EventHeader from './components/EventHeader';
import BookingForm from './components/BookingForm';
import EventDetails from './components/EventDetails';
import MainMap from './components/MainMap';
import data from './data';

// const data = () => import('./data');

export default {
  name: 'event',
  components: {
    MainNav,
    EventHeader,
    BookingForm,
    EventDetails,
    MainMap,
  },
  data: () => ({
    event: data.event,
  }),
};
</script>