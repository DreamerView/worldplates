<template>
    <div class="d-flex gap-2 overflow-x-hidden pb-2">
        <div class="bg-body-secondary border rounded-5 p-3 d-flex flex-column gap-2 w-100" v-for="item in arr">
            <div class="bg-body rounded-4 mx-auto" style="width:80px;height:50px">

            </div>
            <h6 class="text-center m-0">Loading</h6>
        </div>
    </div>
</template>

<script setup>
    const arr = Array(14).fill(0);
</script>