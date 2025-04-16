<script setup>
import { ref } from 'vue';
import JSON from '../assets/data.json'
const dataJSON = ref(JSON)
</script>
<template>
  <section class="extentions-container">
    <div class="extention" v-for="data in dataJSON" :key="data">
        <div class="extention-description">
            <p>{{ data.name }}</p>
        </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '../assets/sass/colors.scss';
@import '../assets/sass/border.scss';
@import '../assets/sass/mixins.scss';
@import '../assets/sass/fonts.scss';
</style>
