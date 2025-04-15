<script setup>
import HeaderApp from './HeaderApp.vue'
import NavApp from './NavApp.vue'
</script>
<template>
  <div class="wrapper">
  <main class="app-container">
    <HeaderApp />
    <NavApp />
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
