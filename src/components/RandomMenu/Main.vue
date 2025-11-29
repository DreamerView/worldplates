<template>
    <div class="container-xl">
        <h3 class="my-4">Random menu for Today</h3>
        <div class="row g-4">
            <div class="col-lg-4 col-sm-6">
                <RandomMenu />
            </div>
            <div class="col-lg-4 col-sm-6">
                <RandomMenu />
            </div>
            <div class="col-lg-4 col-sm-6">
                <RandomMenu />
            </div>
        </div>
    </div>
</template>

<script setup>
    import RandomMenu from './Menu.vue';
</script>