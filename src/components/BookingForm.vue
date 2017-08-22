<style lang="scss">
  @import '../sass/app';
  .form {
    padding: $spacing_medium;
    border: 1px solid $border-colour;
    border-left-width: 0;
    border-right-width: 0;
  }
  .form__set {
    margin: 0;
    padding: 0 $spacing-large 0 0;
    border: 0;
    // border-bottom: 1px solid $border-colour;
  }
  .form__heading {
    margin: 0;
  }
  .form__label {
    display: block;
    line-height: 1.5;
  }
  .form__input, .form__label--wrap {
    display: inline-block;
    margin-top: $spacing_small;
    margin-bottom: $spacing_medium;
    margin-right: $spacing_extra_large;
  }
  .form__input {
    box-sizing: border-box;
    display: block;
    line-height: 1.5;
    width: 100%;
  }
  .form__submit {
    background-color: $secondary_brand;
    padding: 8px;
    border: 0;
    border-radius: 6px;
    font-size: $font_size_medium;
    color: #fff;
    font-weight: bold;
    margin-top: $spacing_large;
  }
  .privacy-statement {
    margin: 0;
    font-size: $font_size_extra_small;
  }
  .availability-indicator {
    display: none;
  }
</style>
<template>
  <form class="form">
    <h4 class="form__heading">Reserve your place now</h4>
    <fieldset class="form__set">
      <label class="form__label form__label--wrap">
        <input class="form__radio" type="radio" name="attendee_type" required>
        I need a room <span class="availability-indicator">Places available</span>
      </label>
      <label class="form__label form__label--wrap">
        <input class="form__radio" type="radio" name="attendee_type" required>
        I have a room <span class="availability-indicator">Places available</span>
      </label>
    </fieldset>
    <fieldset class="form__set">
      <label class="form__label" for="name">Name</label>
      <input class="form__input" type="text" name="name" required>
      <label class="form__label" for="email">Email</label>
      <input class="form__input" ype="email" name="email" required>
      <p class="privacy-statement">
        We won't give your email address to anyone else.<br>See our <a href="#" class="privacy-statement__link">privacy policy</a> for more details
      </p>
    </fieldset>
    <button class="form__submit" disabled>Book</button>
  </form>
</template>

<script>
export default {
  name: 'booking-form',
  // props: ['navItems'],
};
</script>