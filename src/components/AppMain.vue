<script setup>
import HeaderApp from './HeaderApp.vue'
import NavApp from './NavApp.vue'
import ExtentionsApp from './ExtentionsApp.vue'
</script>
<template>
  <div class="wrapper">
    <main class="app-container">
      <HeaderApp />
      <NavApp />
      <ExtentionsApp />
    </main>
  </div>
</template>
<style lang="scss">
@import '../assets/sass/wrapper.scss';
@import '../assets/sass/reset.scss';
@import '../assets/sass/colors.scss';
@import '../assets/sass/border.scss';
@import '../assets/sass/mixins.scss';
.dark {
  body {
    background: changeColor($dark-Gradient);
    color: changeColor($neutral-0);

    .ui-header {
      background-color: changeColor($neutral-800);
      border: none;
      &__btn{
        background-color: changeColor($neutral-800);
      }
      .sun-img{
        color: changeColor($neutral-0);
      }
    }
    .ui-nav {
      .ui-nav-button {
        &__all,
        &__active,
        &__inactive {
          background-color: changeColor($neutral-800);
          color: changeColor($neutral-0);
          border: none;
          border: 0.175em solid changeColor($neutral-700);
        }
      }
    }
  }
}
.app-container {
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  min-height: 100svh;
}
</style>
