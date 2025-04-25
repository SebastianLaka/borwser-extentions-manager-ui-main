<script setup>
import AppMain from './components/AppMain.vue'
</script>

<template>
  <AppMain />
</template>

<style lang="scss">
@import './assets/sass/reset.scss';
// @import './assets/sass/colors.scss';
// @import './assets/sass/border.scss';
// @import './assets/sass/mixins.scss';
// html.dark {
//   body {
//     background: changeColor($dark-Gradient);
//     color: changeColor($neutral-0);
//   }
//   .ui-header {
//     background-color: changeColor($neutral-800);
//     border: none;
//   }
//   .moon-img{
//       stroke: changeColor($neutral-700);
//     }
// }
body {
  padding: 0 0.5em;
  font-family: 'Noto sans', sans-serif;
}
</style>
