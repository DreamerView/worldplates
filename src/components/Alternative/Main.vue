<template>
    <h2 class="my-5">Alternatives</h2>
    <div class="row g-4">
        <div class="col-xl-4 col-md-6 col-12" v-for="item in (meals)">
            <Item :loading="loading" :name="item?.strMeal" :img="item?.strMealThumb" :link="'/view/'+item?.idMeal" />
        </div>
    </div>
</template>

<script setup>
    import { watchEffect,watch,computed } from 'vue';
    import { useFetch } from '../../composables/useFetch';
    import Item from './Item.vue';
    const props = defineProps({
        category:String
    })

    const { data, loading, error, errorText, execute } = useFetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.category}`
    );

    const meals = computed(() => {
        if (loading.value) {
            return Array(6).fill({
                strMeal: '',
                strMealThumb: '',
                idMeal: null
            });
        }
        return data.value?.meals || [];
    });

    watch(
        () => props.category,
        () => {
            execute(); // повторный fetch
        },
        { immediate: true }
    );

</script>