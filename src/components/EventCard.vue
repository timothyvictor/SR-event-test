<style lang="scss">
  @import '../sass/app';
  .event-card {
    background-color: #fff;
    padding: $spacing_medium;
    display: inline-block;
  }
  .event-card__title {
    color: $main_heading_colour;
    margin: 0;
  }
  .event-card__date,
  .event-card__time {
    margin: 0;
    font-size: $font_size_small;
  }
  .event-card__time {
    margin-bottom: $spacing_medium;
  }
  .event-card__map-link {
    font-size: $font_size_extra_small;
  }
</style>
<template>
  <article class="event-card">
    <header class="event-card__header">
      <h3 class="event-card__title">{{ event.location.name }}</h3>
      <p class="event-card__date">{{ formattedDate }}</p>
      <p class="event-card__time">{{ startTime }} - {{ endTime }}</p>
      <event-card-map :geo="event.location.address.geoloc"></event-card-map> 
      <a class="event-card__map-link">Venue's map and directions</a>
    </header>
  </article>
</template>

<script>
import EventCardMap from './EventCardMap';

export default {
  name: 'event-card',
  props: ['event'],
  components: {
    EventCardMap,
  },
  computed: {
    date() {
      return new Date(this.event['date-time'].datetime);
    },
    formattedDate() {
      return this.date.toLocaleString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
      });
    },
    startTime() {
      return this.getTime(this.date);
    },
    endTime() {
      const mins = 60 * (this.event['date-time']['end-time'] - this.event['date-time']['start-time']);
      return this.getTime(new Date(this.date.getTime() + (mins * 60000)));
    },
  },
  methods: {
    getTime(date) {
      return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      });
    },
  },
  // components: {
  //   EventCard,
  // },
};
</script>