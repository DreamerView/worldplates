<template>
    <div class="container-fluid bg-body-secondary p-4 text-center">
        <h1>{{ props?.title || "Unknown"}}</h1>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: String
    });
</script>