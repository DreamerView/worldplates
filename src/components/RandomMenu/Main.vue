<template>
    <div class="container-xl">
        <h3 class="my-4">Random menu for Today</h3>
        <div class="row g-4">
            <div class="col-xl-4 col-md-6 col-12">
                <RandomMenu />
            </div>
            <div class="col-xl-4 col-md-6 col-12">
                <RandomMenu />
            </div>
            <div class="col-xl-4 col-md-6 col-12">
                <RandomMenu />
            </div>
        </div>
    </div>
</template>

<script setup>
    import RandomMenu from './Menu.vue';
</script>