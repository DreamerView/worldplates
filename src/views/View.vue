<template>
  <div class="container-xl my-4">
    <div class="row g-xl-5 g-4">
      <div class="col-lg-5 col-sm-6">
        <div v-if="loading" class="w-100 h-auto bg-body-secondary rounded-5" style="aspect-ratio: 1;" />
        <SmartImg v-else :src="data?.meals[0]?.strMealThumb+'/large'" class="w-100 h-auto bg-body-secondary rounded-5"
          style="aspect-ratio: 1;" />
      </div>
      <div class="col-lg-7 col-sm-6">
        <div class="d-flex flex-column justify-content-center  gap-1 h-100 ms-sm-5">
          <div class="bg-body-secondary rounded-4" style="height:24px;max-width:150px;width:100%;" v-if="loading"/>
          <span v-else class="text-muted">
            Category: 
            <a v-if="data?.meals[0]?.strCategory" :href="'/categories/'+data.meals[0].strCategory" target="_blank"
              rel="noopener noreferrer">
              {{data.meals[0].strCategory}}
            </a>
            <span v-else>Unknown</span>
          </span>
          <div class="bg-body-secondary rounded-4 m-0 mt-2" style="height:40px;max-width:250px;width:100%;" v-if="loading"/>
          <h1 v-else class="m-0 mt-2">{{ data?.meals[0]?.strMeal || "Unknown" }}</h1>
          <div class="mt-4">
            <div class="bg-body-secondary rounded-4 m-0 mb-2" style="height:24px;max-width:150px;width:100%;" v-if="loading"/>
            <p v-else class="m-0 mb-2">Area:
              <a v-if="data?.meals[0]?.strArea" :href="'/country/'+data.meals[0].strArea" target="_blank"
                rel="noopener noreferrer">
                {{data.meals[0].strArea}}
              </a>
              <span v-else>Unknown</span>
            </p>
            <div class="bg-body-secondary rounded-4 m-0" style="height:24px;max-width:150px;width:100%;" v-if="loading"/>
            <p v-else class="m-0">
              Source:
              <a v-if="data?.meals[0]?.strSource" :href="data.meals[0].strSource" target="_blank"
                rel="noopener noreferrer">
                Click here
              </a>
              <span v-else>Unknown</span>
            </p>
          </div>
          <div class="d-lg-block d-none">
            <h5 class="my-4">Ingredients</h5>
            <div class="d-flex flex-wrap gap-2 mt-2" v-if="loading">
              <div class="bg-body-secondary d-flex border py-1 px-3 rounded-5"
                v-for="item in Array(14).fill(0)" style="width:100px;height:32px;">
              </div>
            </div>
            <div v-else class="d-flex flex-wrap gap-2 mt-2">
              <div class="bg-body-secondary d-flex border py-1 px-3 rounded-5"
                v-for="item in getIngredients(data?.meals[0])">
                {{ item.name }}: <b>{{ item.value }}</b>
              </div>
            </div>
          </div>
          <h5 class="my-4">Tags</h5>
          <div class="bg-body-secondary rounded-4" style="height:24px;max-width:150px;width:100%;" v-if="loading"/>
          <p v-else class="text-muted">{{ data?.meals[0]?.strTags || "No tags" }}</p>
        </div>
      </div>
      <div class="col-12 d-lg-none d-block">
        <h5 class="mb-4">Ingredients</h5>
        <div class="d-flex flex-wrap gap-2 mt-2" v-if="loading">
          <div class="bg-body-secondary d-flex border py-1 px-3 rounded-5"
            v-for="item in Array(14).fill(0)" style="width:100px;height:32px;">
          </div>
        </div>
        <div v-else class="d-flex flex-wrap gap-2 mt-2">
          <div class="bg-body-secondary d-flex border py-1 px-3 rounded-5"
            v-for="item in getIngredients(data?.meals[0])">
            {{ item.name }}: <b>{{ item.value }}</b>
          </div>
        </div>
      </div>
      <div class="col-lg-6" v-if="!loading && data?.meals?.[0]?.strYoutube">
        <div class="w-100 h-auto bg-body-secondary rounded-4" style="aspect-ratio: 16/9;">

        </div>
        <YouTubeEmbed :url="data?.meals[0]?.strYoutube" />
      </div>
      <div class="col-lg-6">
        <div class="bg-body-secondary p-4 rounded-4">
          <ul class="m-0 p-0">
            <li v-for="(sentence, i) in instructions" :key="i" class="mb-2">
              {{ sentence }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    onMounted,
    watchEffect,
    computed
  } from "vue";
  import {
    useFetch
  } from "../composables/useFetch";
  import YouTubeEmbed from "../components/YouTubeEmbed.vue";
  import SmartImg from "../composables/SmartImg.vue";
  const skeletonList = Array.from({ length: 14 });
  const props = defineProps({
    id: String
  });

  function getIngredients(meal) {
    const result = [];
    if (!meal) return result;
    for (let i = 1; i <= 20; i++) {
      const name = meal[`strIngredient${i}`] ?.trim();
      const value = meal[`strMeasure${i}`] ?.trim();
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
  const {
    data,
    loading,
    error,
    errorText,
    execute
  } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id}`
  );

  function splitSentences(text) {
    if (!text) return [];
    return text.match(/[^.!?]+[.!?]/g)?.map(s => s.trim()) || [];
  }
  const instructions = computed(() => {
    const raw = data.value?.meals ?.[0]?.strInstructions || "";
    return splitSentences(raw);
  });
  watchEffect(() => {
    console.log(props.id);
    console.log(data);
  });
  onMounted(execute);
</script>