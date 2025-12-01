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
                <SmartImg class="w-100 rounded-5 bg-body" style="height: auto;aspect-ratio: 1;" v-if="data?.meals[0].strMealThumb" :src="data?.meals[0].strMealThumb+'/small'" />
            </div>
            <div class="col-9 d-flex flex-column gap-3 justify-content-center">
                <h5 class="m-0 text-truncate">{{ data?.meals[0]?.strMeal || "Unknown"  }}</h5>
                <div>
                    <router-link :to="'/view/'+data?.meals[0]?.idMeal" class="btn btn-warning rounded-4" style="font-size:0.8rem;">Read more</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted,watchEffect } from 'vue';
    import { useFetch } from "../../composables/useFetch";
    import RandomMenuLoader from './Loader.vue';
    import SmartImg from '../../composables/SmartImg.vue';

    const { data, loading, error, errorText, execute } = useFetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
    );

    onMounted(execute)
</script>