<script setup></script>
<template>
  <div class="ui-header">
    <img class="ui-header__logo" src="../assets/logo.svg" alt="Logo browser extentions UI" />
    <button class="ui-header__btn"><img src="../assets/icon-moon.svg" alt="" /></button>
  </div>
</template>
<style scoped lang="scss">
@import '../assets/colors.scss';
/* - **Neutral 900**: `hsl(227, 75%, 14%)`
- **Neutral 800**: `hsl(226, 25%, 17%)`
- **Neutral 700**: `hsl(225, 23%, 24%)`
- **Neutral 600**: `hsl(226, 11%, 37%)`
- **Neutral 300**: `hsl(0, 0%, 78%)`
- **Neutral 200**: `hsl(217, 61%, 90%)`
- **Neutral 100**: `hsl(0, 0%, 93%)`
- **Neutral 0**: `hsl(200, 60%, 99%)` */
$header-border-radious: 1em;
.ui-header {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  border: 0.175em solid $header-border-color;
  border-radius: $header-border-radious;
  &__btn {
    padding: 0.5em;
    border-radius: $header-border-radious;
    border: none;
    cursor: pointer;
  }
}
</style>
