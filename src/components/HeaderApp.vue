<script setup></script>
<template>
  <header class="ui-header">
    <img class="ui-header__logo" src="../assets/icons/logo.svg" alt="Logo browser extentions UI" />
    <button class="ui-header__btn"><img src="../assets/icons/icon-moon.svg" alt="" /></button>
  </header>
</template>
<style scoped lang="scss">
@import "../assets/sass/colors.scss";
@import "../assets/sass/border.scss";
$header-border-radious: 1em;
.ui-header {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  border: $header-border;
  border-radius: $header-border-radious;
  &__btn {
    padding: 0.5em;
    border-radius: $header-border-radious;
    border: none;
    background-color: #fff;
    cursor: pointer;
  }
}
</style>
