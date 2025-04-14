<script setup></script>
<template>
    <nav class="ui-nav">
        <h1 class="ui-nav__header">Extentions List</h1>
        <div class="ui-nav-button">
            <button class="ui-nav-button__all">All</button>
            <button class="ui-nav-button__active">Active</button>
            <button class="ui-nav-button__inactive">Inactive</button>
        </div>
    </nav>
</template>
<style scoped lang="scss">
@import '../assets/sass/colors.scss';
@import '../assets/sass/border.scss';
@media (min-width: 20em){
    .ui-nav{
        display: flex;
        justify-content: space-between;
        .ui-nav-button{
            &__all,
            &__active,
            &__inactive{
                padding: .5em 1.25em;
                border: none;
                border-radius: 8em;
                border: .2em solid $neutral-200;
            }
        }
    }
}
</style>