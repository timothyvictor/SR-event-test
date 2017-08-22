<style lang="scss">
  @import '../sass/app';
  .event-details {
    padding: $spacing_medium;
  }
</style>
<template>
  <article class="event-details">
     <event-detail :heading="'Who is this event for?'" :text="'This event is suitable for anyone looking for a room or roommate in New york'"></event-detail>
     <event-detail :heading="'What area does this event cover?'" :text="event['areas-covered']"></event-detail>
     <event-detail :heading="'Venue directions'" :text="event.location.directions"></event-detail>
     <event-detail :heading="'Nearest subway'" :text="event.location['transport-station']"></event-detail>
  </article>  
</template>

<script>
  import EventDetail from './EventDetail';

  export default {
    name: 'event-details',
    props: ['event'],
    components: {
      EventDetail,
    },
  };
</script>
