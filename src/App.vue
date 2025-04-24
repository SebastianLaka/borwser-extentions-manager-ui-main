<script setup>
import AppMain from './components/AppMain.vue'
</script>

<template>
  <AppMain />
</template>

<style lang="scss">
@import './assets/sass/reset.scss';
@import './assets/sass/colors.scss';
@import './assets/sass/border.scss';
@import './assets/sass/mixins.scss';
html.dark {
  body {
    background: $dark-Gradient;
    color: $neutral-0;
  }
  .ui-header{
    background-color: $neutral-800;
    border: none;
  }
}
body {
  padding: 0 0.5em;
  font-family: 'Noto sans', sans-serif;
}
</style>
