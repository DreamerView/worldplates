<template>
    <div class="d-flex gap-3 overflow-x-hidden pb-2">
        <div style="width:80px" class="d-flex flex-column gap-2" v-for="item in arr">
            <div class="bg-body-secondary border rounded-5 d-flex align-items-center justify-content-center" style="width:80px;height:80px;">
            </div>
            <p class="text-center text-truncate m-0 fw-bold" style="font-size:0.8rem;">Loading</p>
        </div>
    </div>
</template>

<script setup>
    const arr = Array(14).fill(0);
</script>