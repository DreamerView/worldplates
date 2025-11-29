<template>
    <div class="container-xl my-4">
        <h3 class="my-4">Find fast by Letter</h3>

        <div class="row g-4">
            <div class="col-1" v-for="letter in letters" :key="letter">
                <a class="fs-2" href="">{{ letter }}</a>
            </div>
        </div>
    </div>
</template>

<script setup>
    const letters = Array.from({
            length: 26
        }, (_, i) =>
        String.fromCharCode(65 + i)
    );
</script>