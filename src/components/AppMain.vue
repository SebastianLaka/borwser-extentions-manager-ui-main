<script setup>
import HeaderApp from './HeaderApp.vue'
import NavApp from './NavApp.vue'
import ExtentionsApp from './ExtentionsApp.vue'
</script>
<template>
  <div class="wrapper">
    <main class="app-container">
      <HeaderApp />
      <NavApp />
      <ExtentionsApp />
    </main>
  </div>
</template>
<style lang="scss">
@import '../assets/sass/wrapper.scss';
@import '../assets/sass/reset.scss';
@import '../assets/sass/colors.scss';
@import '../assets/sass/border.scss';
@import '../assets/sass/mixins.scss';

.dark {
  body {
    background: changeColor($dark-Gradient);
    color: changeColor($neutral-0);
    transition: background-color .5s ease-in-out, color 0.5s ease-in-out;
  }
  .ui-header {
    background-color: changeColor($neutral-800);
    border: none;
    &__btn {
      background-color: changeColor($neutral-800);
      &:focus {
        border: 0.175em solid changeColor($red-700);outline: none;
      }
    }
    .sun-img {
      color: changeColor($neutral-0);
    }
  }
  .ui-nav {
    .ui-nav-button {
      &__all,
      &__active,
      &__inactive {
        background-color: changeColor($neutral-800);
        color: changeColor($neutral-100);
        border: none;
        border: 0.175em solid changeColor($neutral-700);
        &:hover {
          color: changeColor($neutral-800);
        }
        &:focus {
          border: 0.175em solid changeColor($neutral-700);
          outline: none;
          color: changeColor($neutral-800);
        }
      }
    }
  }
  .extentions-container {
    .extention {
      background-color: changeColor($neutral-800);
      border: none;
      border: 0.175em solid changeColor($neutral-700);
      .extention-card {
        .extention-description {
          &__name {
            color: changeColor($neutral-100);
          }
          &__about {
            color: changeColor($neutral-300);
          }
        }
      }
      .extention-button-area {
        &__remove-btn {
          background-color: changeColor($neutral-800);
          color: changeColor($neutral-0);
          border: none;
          border: 0.175em solid changeColor($neutral-700);
        }
        &__remove-btn:focus {
          border: 0.175em solid changeColor($red-700);
          outline: none;
        }
       
      }
    }
  }
  .empty-info {
    text-align: center;
    margin-top: 0.5em;
    padding: 1em 0;
    border-top: 0.1em solid changeColor($neutral-0);
    border-bottom: 0.1em solid changeColor($neutral-0);
    color: changeColor($neutral-0);
    font-size: 1rem;
  }
}
.app-container {
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  min-height: 100svh;
}
</style>
