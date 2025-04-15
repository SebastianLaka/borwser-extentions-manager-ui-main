<script setup>
import HeaderApp from './HeaderApp.vue'
import NavApp from './NavApp.vue'
import ExtentionsApp from './ExtentionsApp.vue';
</script>
<template>
  <div class="wrapper">
  <main class="app-container">
    <HeaderApp />
    <NavApp />
    <ExtentionsApp/>
  </main>
</div>
</template>
<style scoped lang="scss">
@import "../assets/sass/wrapper.scss";
.app-container {
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  min-height: 100svh;
}
</style>
