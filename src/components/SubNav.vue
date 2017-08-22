<style lang="scss">
  @import '../sass/app';
  .sub-menu {
    margin: 0;
    list-style: none;
    display: flex;
    padding: 8px 0;
    background-color: $background_grey;
    border-bottom: 1px solid $border_colour;
  }
  .sub-menu__link {
    color: $primary_brand;
    text-decoration: none;
    padding: 8px;
  }
</style>
<template>
  <ul class="sub-menu" role="menubar">
    <li role="menuitem" class="sub-menu__item" v-for="item in navItems">
      <a class="sub-menu__link" :href="item.url">{{ item.text }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'sub-nav',
  props: ['navItems'],
};
</script>