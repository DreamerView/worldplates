<template>
    <PlaceholderMain :title="props.name" />
    <CountryItem :name="props.name" />
</template>
<script setup>
    import PlaceholderMain from "../components/Placeholder/Main.vue";
    import CountryItem from "../components/CountryItem/Main.vue"
    const props = defineProps({
        name: String
    });
</script>