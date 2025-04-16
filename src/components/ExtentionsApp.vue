<script setup>
import { ref } from 'vue'
import jsonData from '../assets/data.json'
const dataJSON = ref(jsonData)
function getLogoPath(path) {
  const filename = path.split('/').pop()
  return new URL(`../assets/images/${filename}.svg`, import.meta.url).href
}
</script>

<template>
  <section class="extentions-container">
    <div class="extention" v-for="(data, index) in dataJSON" :key="index">
      <div class="extention-card">
        <div class="extention-image">
          <img :src="getLogoPath(data.logo)" :alt="`${data.name}`" />
        </div>
        <div class="extention-description">
          <p class="extention-description">{{ data.name }}</p>
          <p class="extention-description">{{ data.description }}</p>
        </div>
      </div>
      <div class="extention-button-area">
        <button>Remove</button>
        <button>XX</button>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import '../assets/sass/colors.scss';
@import '../assets/sass/border.scss';
@import '../assets/sass/mixins.scss';
@import '../assets/sass/fonts.scss';
@media (min-width: 20em) {
  .extentions-container {
    .extention {
      display: flex;
      flex-direction: column;
     .extention-card{
      display: flex;
     }
      .extention-button-area {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
