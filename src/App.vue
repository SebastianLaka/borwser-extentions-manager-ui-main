<script setup>
import HeaderApp from './components/HeaderApp.vue'
</script>

<template>
  <div class="wrapper">
    <HeaderApp />
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
    padding: 0 .5em
}
.wrapper{
    max-width: 90.5em;
    width: 100%;
    margin: 0 auto;
    padding: 1em 0;
}
</style>
