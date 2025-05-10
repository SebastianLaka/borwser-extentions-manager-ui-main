<script setup>
import { ref } from 'vue'
const props = defineProps({
  isEmpty: String,
})

</script>

<template>
      <p class="empty-info">{{ props.isEmpty }}</p>
</template>

<style scoped lang="scss">
@import '../assets/sass/colors.scss';
.empty-info {
  text-align: center;
  margin-top: 0.5em;
  padding: 1em 0;
  border-top: 0.1em solid changeColor($neutral-200);
  border-bottom: 0.1em solid changeColor($neutral-200);
  color: changeColor($neutral-900);
  font-size: 1rem;
  animation: show .3s ease-in-out;
}
@keyframes show{
    from{
        opacity: 0;
    }to{
        opacity: 1;
    }
}
</style>
