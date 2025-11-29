<template>
    <div class="container-xl mt-4">
        <div v-if="loading">
            <Loader />
        </div>
        <div v-else-if="error">
            {{errorText }}
        </div>
        <div v-else>
            <div class="d-flex gap-3 overflow-x-hidden pb-2">
                <div class="d-flex flex-column gap-2" v-for="item in (data?.categories || [])" :key="item.idCategory">
                    <div class="bg-body-secondary border rounded-5 d-flex align-items-center justify-content-center" style="width:80px;height:80px;">
                        <img v-if="item.strCategoryThumb" class="rounded-4 mx-auto" loading="lazy" :src="item.strCategoryThumb" width="auto" height="40" alt=""/>
                    </div>
                    <p class="text-center text-truncate m-0 fw-bold" style="font-size:0.8rem;">{{ item?.strCategory || "Unknown" }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';
    import { useFetch } from "../../composables/useFetch";
    import Loader from './Loader.vue';

    const { data, loading, error, errorText, execute } = useFetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    onMounted(execute)
</script>