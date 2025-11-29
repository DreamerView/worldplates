<template>
    <div class="container-xl my-4">
        <div class="row g-4">
            <div class="col-lg-3 col-md-4 col-sm-6">
                <div v-if="loading" class="w-100 h-auto bg-body-secondary rounded-5" style="aspect-ratio: 1;"/>
                <img v-else :src="data?.meals[0]?.strMealThumb" class="w-100 h-auto bg-body-secondary rounded-5" style="aspect-ratio: 1;" alt=""/>
            </div>
            <div class="col-lg-6 col-md-4 col-sm-6">
              <div class="d-flex flex-column justify-content-center  gap-1 h-100 ms-md-5">
                <span class="text-muted">
                  {{ data?.meals[0]?.strCategory || "Unknown" }}
                </span>
                <h1 class="m-0 mt-2">{{ data?.meals[0]?.strMeal || "Unknown" }}</h1>
                <div class="mt-4">
                  <p class="m-0 mb-2">Area: {{ data?.meals[0]?.strArea || "Unknown" }}</p>
                  <p class="m-0">
                    Source:
                    <a
                      v-if="data?.meals[0]?.strSource"
                      :href="data.meals[0].strSource"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click here
                    </a>
                    <span v-else>Unknown</span>
                  </p>
                </div>
                {{ data?.meals[0]?.strTags }}
              </div>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="d-flex flex-column gap-3 h-100 overflow-y-auto">
                <div class="bg-body-secondary border py-1 px-3 rounded-5"
                    v-for="item in getIngredients(data?.meals[0])">
                  {{ item.name }}: <b>{{ item.value }}</b>
                </div>
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

function getIngredients(meal) {
  const result = [];

  if(!meal) return result;

  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`]?.trim();
    const value = meal[`strMeasure${i}`]?.trim();
    console.log(name)
    if (name && name !== "") {
      result.push({
        name,
        value: value || ""
      });
    }
  }

  return result;
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
