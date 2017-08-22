<style lang="scss">
  @import '../sass/app';
  .main-nav {
    font-size: $font_size_medium;
  }
  .main-menu {
    font-weight: bold;
    margin: 0;
    list-style: none;
    display: flex;
    background-color: $primary_brand;
    padding: 8px 0;
  }
  .main-menu__link {
    color: #fff;
    text-decoration: none;
    padding: 8px;
  }
</style>
<template>
  <nav class="main-nav" role="navigation">
    <ul role="menubar" class="main-menu">
      <li role="menuitem" class="main-menu__item"><a href="/" class="main-menu__link">Home</a></li>
      <li role="menuitem" class="main-menu__item main-menu__item--active"><a href="/"  class="main-menu__link">Events</a></li>
    </ul>
    <sub-nav :nav-items="subNavItems"></sub-nav>
  </nav>
</template>

<script>
import SubNav from './SubNav';

export default {
  name: 'main-nav',
  components: {
    SubNav,
  },
  data: () => ({
    subNavItems: [
      { text: 'Event', url: '#1' },
      { text: 'Event', url: '#2' },
      { text: 'Event', url: '#3' },
      { text: 'Event', url: '#4' },
    ],
  }),
};
</script>