<style lang="scss">
  @import '../sass/app';
  .event-header {
    margin-bottom: $spacing_medium;
  }
  .event-header__title {
    font-size: $font_size_large;
    font-family: $fancy_heading_font;
    color: $main_heading_colour;
    margin: $spacing_medium;
  }
  .envent-header__title--shown-tablet-up {
    display: none;
  }
  .splash {
    box-sizing: border-box;
    padding: 0 $spacing_medium $spacing_medium;
    min-height: 160px;
  }
</style>
<template>
  <header class="event-header">
    <h1 class="event-header__title">SpeedRoomMating {{ event.location.address.city }}<span class="envent-header__title--shown-tablet-up"> @ {{ event.location.name }}</span></h1>
    <div class="splash">
      <event-card :event="event"></event-card>
    </div>
  </header>
</template>

<script>
import EventCard from './EventCard';

export default {
  name: 'event-header',
  props: ['event'],
  components: {
    EventCard,
  },
};
</script>
