<script setup></script>
<template>
  <header class="ui-header">
    <img class="ui-header__logo" src="../assets/icons/logo.svg" alt="Logo browser extentions UI" />
    <button class="ui-header__btn"><img src="../assets/icons/icon-moon.svg" alt="" /></button>
  </header>
</template>
<style scoped lang="scss">
@import '../assets/sass/colors.scss';
@import '../assets/sass/border.scss';

@media (min-width: 20em) {
  .ui-header {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    border: $header-border;
    border-radius: $header-border-radius;
    &__btn {
      padding: 0.5em;
      border-radius: $header-border-radius;
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
  }
}
</style>
