<script setup>
import HeaderApp from './HeaderApp.vue'
import NavApp from './NavApp.vue'
</script>
<template>
  <main class="app-container">
    <HeaderApp />
    <NavApp />
  </main>
</template>
<style scoped lang="scss">
.app-container {
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  min-height: 100svh;
}
</style>
