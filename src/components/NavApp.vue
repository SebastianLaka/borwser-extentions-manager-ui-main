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
@media (min-width: 20em){
    .ui-nav{
        display: flex;
        justify-content: space-between;
    }
}
</style>