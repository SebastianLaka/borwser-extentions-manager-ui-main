<script setup>
import HeaderApp from './components/HeaderApp.vue';
import NavApp from './components/NavApp.vue';
</script>

<template>
  <div class="wrapper">
    <HeaderApp />
    <NavApp/>
  </div>
</template>

<style>
@import "./assets/sass/reset.scss";
@import "./assets/sass/wrapper.scss";
body{
    padding: 0 .5em;
    font-family: 'Noto sans', sans-serif;
}
</style>
