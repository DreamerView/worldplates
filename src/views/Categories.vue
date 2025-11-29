<template>
    <PlaceholderMain :title="props.name" />
    <CategoriesItem :name="props.name" />
</template>

<script setup>
    import PlaceholderMain from "../components/Placeholder/Main.vue";
    import CategoriesItem from "../components/CategoriesItem/Main.vue"
    const props = defineProps({
        name: String
    });
</script>