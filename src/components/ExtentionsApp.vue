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
    <div
      class="extention"
      v-for="(data, index) in dataJSON"
      :key="index"
    >
    <img
        :src="getLogoPath(data.logo)"
        :alt="`${data.name}`"
      />
      <div class="extention-description">
        <p class="extention-description__name">{{ data.name }}</p>
        <p class="extention-description__about">{{ data.description }}</p>
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
