<template>
    <div class="container-xl my-4">
        <div class="row g-4">
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div v-if="loading" class="w-100 h-auto bg-body-secondary rounded-5" style="aspect-ratio: 1;"/>
                <img v-else :src="data?.meals[0]?.strMealThumb" class="w-100 h-auto bg-body-secondary rounded-5" style="aspect-ratio: 1;" alt=""/>
            </div>
            <div class="col-lg-6 col-md-4 col-sm-6 d-flex flex-column align-items-sm-center justify-content-center gap-4">
                <h1 class="m-0">{{ data?.meals[0]?.strMeal || "Unknown" }}</h1>
                <p class="m-0">Area: {{ data?.meals[0]?.strArea || "Unknown" }}</p>
                <p class="m-0">Category: {{ data?.meals[0]?.strCategory || "Unknown" }}</p>
                {{ data?.meals[0]?.strTags }}
            </div>
            <div class="col-lg-3 col-md-4">
                <div class="bg-body-secondary border p-4 h-100 rounded-5">
                    <h3>Ingredients</h3>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="bg-body-secondary p-4 rounded-4">
                    {{ data?.meals[0]?.strInstructions || "Unknown" }}
                </div>
            </div>
            <div class="col-lg-6" v-if="!loading && data?.meals?.[0]?.strYoutube">
                <YouTubeEmbed :url="data?.meals[0]?.strYoutube" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, watchEffect } from "vue";
import { useFetch } from "../composables/useFetch";
import YouTubeEmbed from "../components/YouTubeEmbed.vue";

const props = defineProps({
  id: String
});

function getYouTubeId(url) {
  if (!url || typeof url !== "string") return null;
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|watch\?.+&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

const { data, loading, error, errorText, execute } = useFetch(
  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id}`
);

watchEffect(() => {
  console.log(props.id);
  console.log(data);
});

onMounted(execute);
</script>
