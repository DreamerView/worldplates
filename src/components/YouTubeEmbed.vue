<template>
  <div v-if="videoId" class="ratio ratio-16x9 rounded-4 overflow-hidden">
    <iframe
      :src="embedUrl"
      title="YouTube video"
      loading="lazy"
      allowfullscreen
      frameborder="0"
    ></iframe>
  </div>

  <div v-else class="w-100 h-auto bg-body-secondary rounded-4 d-flex align-items-center justify-content-center" style="aspect-ratio:16/9;">
    <h1 class="text-muted">Invalid YouTube URL</h1>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});

// Extract Video ID from ANY YouTube URL
function getYouTubeId(url) {
  if (!url) return null;

  // Covers:
  // https://youtu.be/ID
  // https://youtube.com/watch?v=ID
  // https://youtube.com/embed/ID
  // https://www.youtube.com/watch?v=ID&something=xxx
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/);
  return match ? match[1] : null;
}

const videoId = computed(() => getYouTubeId(props.url));

const embedUrl = computed(() =>
  videoId.value
    ? `https://www.youtube-nocookie.com/embed/${videoId.value}`
    : null
);
</script>

<style scoped>
.ratio {
  background: #000;
}
</style>
