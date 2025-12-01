<template>
    <div class="bg-body-secondary p-xl-3 p-2 border rounded-5">
        <div class="row align-items-center">
            <div class="col-3">
                <SmartImg v-if="!loading && props?.img"  class="w-100 rounded-5 bg-body" style="height: auto;aspect-ratio: 1;" :src="props.img+'/small'" />
                <div v-else class="bg-body w-100 h-auto rounded-4" style="aspect-ratio: 1;"></div>
            </div>
            <div class="col-9 d-flex flex-column gap-3 justify-content-center">
                <div v-if="loading" class="bg-body rounded-4" style="width:150px;height:32px;"></div>
                <h5 v-else class="m-0 text-truncate">{{ props.name || "Unknown"  }}</h5>
                <div>
                    <router-link v-if="!loading && props?.link" :to="props.link" class="btn btn-warning rounded-4" style="font-size:0.8rem;">Read more</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import SmartImg from '../../composables/SmartImg.vue';
    const props = defineProps({
        img:String,
        name:String,
        link:String,
        loading:Boolean
    })
</script>