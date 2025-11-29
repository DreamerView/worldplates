<template>
    <div class="row g-4">
        <div v-for="item in list" class="col-xl-2 col-lg-3 col-md-4 col-6">
            <div class="d-flex flex-column gap-2">
                <img :src="item.strMealThumb + '/small'" :srcset="`
                                ${item.strMealThumb}/medium 1x,
                                ${item.strMealThumb}/large 2x
                            `" class="rounded-5 w-100 h-auto bg-body-secondary" style="aspect-ratio: 1;" alt="" loading="lazy" />
                <h6 class="text-truncate mt-2 text-center m-0" style="width:calc(100% - 16px)">
                    {{ item?.strMeal || "Unknown" }}</h6>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        list:Array
    })
</script>