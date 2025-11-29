<template>
    <div class="container-xl my-4">
        <h3 class="mb-4">Favourite food from different countries</h3>
        <div class="row g-4">
            <div class="col-xl-1 col-lg-2 col-md-3 col-4" v-for="item in areas">
                <img :src="'/country/'+item.toLowerCase()+'.jpg'" loading="lazy" class="w-100 rounded-5 h-auto bg-body-secondary" style="aspect-ratio: 1;" alt=""/>
                <h6 class="text-center mt-3">{{ item }}</h6>
            </div>
        </div>
    </div>
</template>

<script setup>
    const areas = [
        "American",
        "British",
        "Canadian",
        "Chinese",
        "Dutch",
        "Egyptian",
        "French",
        "Greek",
        "Indian",
        "Irish",
        "Italian",
        "Jamaican",
        "Japanese",
        "Kenyan",
        "Malaysian",
        "Mexican",
        "Moroccan",
        "Polish",
        "Portuguese",
        "Russian",
        "Spanish",
        "Thai",
        "Tunisian",
        "Turkish",
        "Vietnamese"
    ];
</script>