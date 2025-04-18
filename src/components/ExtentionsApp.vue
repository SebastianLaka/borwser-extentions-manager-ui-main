<script setup>
import { ref } from 'vue'
import jsonData from '../assets/data.json'
import VueToggles from 'vue-toggles'
const dataJSON = ref(jsonData)
function getLogoPath(path) {
  const filename = path.split('/').pop()
  return new URL(`../assets/images/${filename}.svg`, import.meta.url).href
}
</script>

<template>
  <section class="extentions-container">
    <div class="extention" v-for="data in dataJSON" :key="data">
      <div class="extention-card">
        <div class="extention-image">
          <img :src="getLogoPath(data.logo)" :alt="`${data.name}`" />
        </div>
        <div class="extention-description">
          <p class="extention-description__name">{{ data.name }}</p>
          <p class="extention-description__about">{{ data.description }}</p>
        </div>
      </div>
      <div class="extention-button-area">
        <button class="extention-button-area__remove-btn">Remove</button>
        <VueToggles
          :value="data.isActive"
          :height="25"
          :width="50"
          checkedBg="hsl(3, 77%, 44%)"
          uncheckedBg="hsl(0, 0%, 78%)"
          @click="value = !value"
          class="outline-btn"
        />
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
    @include flex-column;
    gap: 1em 0;
    .extention {
      @include flex-column;
      border: $border;
      border-radius: $border-radius;
      padding: 1em;
      gap: 1.2em;
      .extention-card {
        display: flex;
        gap: 1em;
        .extention-description {
          &__name {
            color: changeColor($neutral-900);
            font-weight: bold;
            font-size: changeFontSize(1.25rem);
            padding: 0 0 0.25em 0;
          }
          &__about {
            color: changeColor($neutral-600);
            min-width: 1ch;
          }
        }
      }
      .extention-button-area {
        @include flex-row-between;
        align-items: center;
        &__remove-btn {
          padding: 0.4em 0.8em;
          font-size: changeFontSize(1rem);
          border: 0.175em solid changeColor($neutral-300);
          border-radius: $border-radius;
          outline-color: changeColor($red-400);
          transition:
            background-color 0.3s ease-in-out,
            color 0.3s ease-in-out,
            border 0.3s ease-in-out;
          &:hover {
            @include hover-buttons;
          }
        }
        .outline-btn:focus {
          outline: .175em solid changeColor($red-400);
        }
      }
    }
  }
}
@media (min-width: 48em) {
  .extentions-container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5em;
    .extention {
      width: 49.25%;
      justify-content: space-between;
    }
  }
}
@media (min-width: 65em) {
  .extentions-container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    .extention {
      width: 21em;
    }
  }
}
</style>
