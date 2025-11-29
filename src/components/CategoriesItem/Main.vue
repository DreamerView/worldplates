<template>
    <div class="container-xl my-5">
        <Loader v-if="loading" />
        <div v-else-if="error">
            {{errorText }}
        </div>
        <Block v-else :list="data?.meals || []" />
    </div>
</template>

<script setup>
    import { onMounted,watchEffect } from 'vue';
    import Block from './Block.vue';
    import Loader from './Loader.vue';
    import { useFetch } from "../../composables/useFetch";

    const props = defineProps({
        name:String
    });

    const { data, loading, error, errorText, execute } = useFetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.name}`
    );

    watchEffect(()=>{
        console.log(data)
    })

    onMounted(execute)
</script>