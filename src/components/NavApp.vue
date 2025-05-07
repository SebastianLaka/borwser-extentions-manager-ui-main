<script setup>
import  filterExtentions  from '../composables/filterExtentions'
import { onMounted, useTemplateRef } from 'vue'
const focusBtn = useTemplateRef('focusBtn')
onMounted(() => {
  focusBtn.value.focus()
})
const { getActive, getInactive, getAll } = filterExtentions()

</script>
<template>
  <nav class="ui-nav">
    <h1 class="ui-nav__header">Extentions List</h1>
    <div class="ui-nav-button">
      <button @click="getAll" ref="focusBtn" class="ui-nav-button__all">All</button>
      <button @click="getActive" class="ui-nav-button__active">Active</button>
      <button @click="getInactive"  class="ui-nav-button__inactive">Inactive</button>
    </div>
  </nav>
</template>
<style scoped lang="scss">
@import '../assets/sass/colors.scss';
@import '../assets/sass/border.scss';
@import '../assets/sass/mixins.scss';
@import '../assets/sass/fonts.scss';
@media (min-width: 20em) {
  .ui-nav {
    @include flex-row-between;
    align-items: center;
    flex-direction: column;
    &__header {
      margin-bottom: 0.5em;
      font-size: changeFontSize(2rem);
    }
    .ui-nav-button {
      &__all,
      &__active,
      &__inactive {
        @include navButtons;
        outline-color: changeColor($red-400);
        transition:
          background-color 0.3s ease-in-out,
          color 0.3s ease-in-out,
          border 0.3s ease-in-out;
        &:hover {
          background-color: changeColor($red-700);
          color: changeColor($neutral-0);
          border-color: changeColor($red-700);
        }
        &:focus{
        background-color: changeColor($red-700);
        color: changeColor($neutral-0);
      }
      }
      &__active {
        margin: 0 0.6em;
      }
      
    }
  }
}
@media (min-width: 37.5em) {
  .ui-nav {
    flex-direction: row;
    &__header{
        margin: 0;
    }
  }
}
</style>