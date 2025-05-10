<script setup>
import VueToggles from 'vue-toggles'
import { ref } from 'vue'
import filterExtentions from '../composables/filterExtentions'
import useExtentions from '../composables/filterExtentions'
const { filteredDataJSON } = filterExtentions()
function getLogoPath(path) {
  const filename = path.split('/').pop()
  return new URL(`../assets/images/${filename}.svg`, import.meta.url).href
}
const { removeExtention, handleActive } = useExtentions()
</script>
<template>
  
  <div v-if="filteredDataJSON.length === 0" class="empty-extentions">
    <p class="empty-extentions__info">No more extentions</p>
  </div>
  <section class="extentions-container" v-else>
    <transition-group name="extentions" tag="div" class="transition-extentions">
      <div class="extention" v-for="data in filteredDataJSON" :key="data.name">
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
          <button @click="removeExtention(data)" class="extention-button-area__remove-btn">
            Remove
          </button>
          <VueToggles
            v-model="data.isActive"
            :height="25"
            :width="50"
            checkedBg="hsl(3, 77%, 44%)"
            uncheckedBg="hsl(0, 0%, 78%)"
            @click="handleActive(data)"
            class="outline-btn"
            aria-checked="idDark"
          />
        </div>
      </div>
    </transition-group>
  </section>
</template>
<style scoped lang="scss">
@import '../assets/sass/colors.scss';
@import '../assets/sass/border.scss';
@import '../assets/sass/mixins.scss';
@import '../assets/sass/fonts.scss';
@media (min-width: 20em) {
  .empty-extentions {
    text-align: center;
    margin-top: 0.5em;
    padding: 1em 0;
    border-top: 0.1em solid changeColor($neutral-0);
    border-bottom: 0.1em solid changeColor($neutral-0);
    &__info {
      color: changeColor($neutral-0);
      font-size: 1rem;
    }
  }
  
  .extentions-container,
  .transition-extentions {
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
            color: changeColor($neutral-800);
          }
        }
        .outline-btn:focus {
          outline: 0.175em solid changeColor($red-400);
        }
      }
    }
  }
}
@media (min-width: 48em) {
  .extentions-container,
  .transition-extentions {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5em;
    border: none;
    .extention {
      width: 49.25%;
      justify-content: space-between;
    }
  }
}
@media (min-width: 65em) {
  .extentions-container,
  .transition-extentions {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .extention {
      width: 21em;
    }
  }
}
.extentions-enter-active,
.extentions-leave-active {
  transition: all 0.5s ease;
}
.extentions-enter-from,
.extentions-leave-to {
  opacity: 0;
}
</style>
