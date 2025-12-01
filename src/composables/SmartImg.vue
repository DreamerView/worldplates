<template>
  <div :class="wrapperClass" :style="wrapperStyle">
    <!-- Skeleton -->
    <div
      v-if="loading"
      class="bg-body-secondary w-100 h-100 rounded-4"
      style="animation: pulse 1.4s ease-in-out infinite;"
    ></div>

    <!-- Loaded Image -->
    <img
      v-else
      :src="currentSrc"
      :srcset="currentSrcset"
      :sizes="props.sizes"
      :class="imgClass"
      :style="imgStyle"
      @error="onError"
      class="w-100 h-auto"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  src: { type: String, required: true },
  srcset: { type: String, default: "" },
  sizes: { type: String, default: "" },
  class: { type: [String, Object, Array], default: "" },
  style: { type: [String, Object, Array], default: "" },
});

const loading = ref(true);
const failed = ref(false);
const currentSrc = ref(props.src);
const currentSrcset = ref(props.srcset);

const imgClass = props.class;
const imgStyle = props.style;
const wrapperClass = props.class;
const wrapperStyle = props.style;

watch(
  () => [props.src, props.srcset],
  () => {
    loading.value = true;
    failed.value = false;

    currentSrc.value = props.src;
    currentSrcset.value = props.srcset;

    loadImage(props.src);
  },
  { immediate: true }
);

function loadImage(url) {
  const img = new Image();
  if (props.srcset) img.srcset = props.srcset;
  img.src = url;

  img.onload = () => {
    loading.value = false;
    failed.value = false;
  };

  img.onerror = () => {
    failed.value = true;
    loading.value = false;

    currentSrc.value =
      "https://via.placeholder.com/500x500?text=Error";
    currentSrcset.value = "";
  };
}

function onError() {
  failed.value = true;
  currentSrc.value = "https://via.placeholder.com/500x500?text=Error";
  currentSrcset.value = "";
}
</script>

<style>
@keyframes pulse {
  0%   { opacity: 0.6; }
  50%  { opacity: 1; }
  100% { opacity: 0.6; }
}
</style>
