<template>
    <div class="bg-body-secondary p-xl-3 p-2 border rounded-5">
        <div v-if="loading">
            <RandomMenuLoader />
        </div>
        <div v-else-if="error">
            {{errorText }}
        </div>
        <div v-else class="row align-items-center">
            <div class="col-3">
                <img loading="lazy" class="w-100 rounded-5" style="height: auto;aspect-ratio: 1;" v-if="data?.meals[0].strMealThumb" :src="data?.meals[0].strMealThumb+'/small'" alt=""/>
            </div>
            <div class="col-9 d-flex flex-column gap-3 justify-content-center">
                <h5 class="m-0 text-truncate">{{ data?.meals[0]?.strMeal || "Unknown"  }}</h5>
                <div>
                    <button class="btn btn-warning rounded-4" style="font-size:0.8rem;">Read more</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted,watchEffect } from 'vue';
    import { useFetch } from "../../composables/useFetch";
    import RandomMenuLoader from './Loader.vue';

    const { data, loading, error, errorText, execute } = useFetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    onMounted(execute)
</script>