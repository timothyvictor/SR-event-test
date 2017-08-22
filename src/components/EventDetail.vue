<style lang="scss">
  @import '../sass/app';
  .event-detail {
    margin-bottom: $spacing_medium;
  }
  .event-detail__heading,
  .event-detail__text {
    margin: 0;
  }
</style>

<template>
  <section class="event-detail">
   <h4 class="event-detail__heading">{{ heading }}</h4>
   <p class="event-detail__text">{{ text }}</p>
  </section>  
</template>

<script>
  export default {
    name: 'event-detail',
    props: ['heading', 'text'],
  };
</script>