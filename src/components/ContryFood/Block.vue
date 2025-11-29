<template>
    <div class="bg-body-secondary border rounded-4 p-3 overflow-y-auto" style="height:300px;">
        <div v-if="loading">
            Loading
        </div>
        <div v-else-if="error">
            {{ errorText }}
        </div>
        <div class="d-flex flex-column gap-2" v-else>
            <div v-for="item in (data?.meals || [])" :key="item.idMeal">
                <a :href="item.strMealThumb">{{ item?.strMeal || "Unknown" }}</a>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted,watchEffect } from "vue";
    const props = defineProps({
        country:String
    });
    import { useFetch } from "../../composables/useFetch";
    const { data, loading, error, errorText, execute } = useFetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${props.country}`
    );

    watchEffect(()=>{
        console.log(props.country)
        console.log(data)
    });

    onMounted(execute)
</script>