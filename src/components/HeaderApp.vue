<script setup>
import { useDark, useToggle } from '@vueuse/core'
import Logo from './icons/Logo.vue'
import ThemeIcon from './icons/ThemeIcon.vue'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
  <header class="ui-header">
    <Logo />
      <button class="ui-header__btn" @click="toggleDark()">
        <ThemeIcon :isDark="isDark" />
      </button>
  </header>
</template>
<style scoped lang="scss">
@import '../assets/sass/colors.scss';
@import '../assets/sass/border.scss';
@import '../assets/sass/mixins.scss';
@media (min-width: 20em) {
  .ui-header {
    @include flex-row-between;
    padding: 1em;
    border: $border;
    border-radius: $border-radius;
    &__btn {
      padding: 0.5em 0.75em;
      border-radius: changeColor($border-radius);
      border: none;
      background-color: changeColor($neutral-0);
      outline-color: changeColor($red-400);
      transition:
        background-color 0.3s ease-in-out,
        color 0.3s ease-in-out,
        border 0.3s ease-in-out;
      &:hover {
        @include hover-buttons;
        background-color: changeColor($neutral-300);
      }
    }
  }
}
</style>
