<script setup></script>
<template>
    <nav class="ui-nav">
        <h1 class="ui-nav__header">Extentions List</h1>
        <div class="ui-nav-buttons">
            <button>All</button>
            <button>Active</button>
            <button>Inactive</button>
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