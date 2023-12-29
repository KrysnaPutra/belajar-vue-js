<template>
    <div class="p-3 bg-white text-black w-full rounded-md shadow-sm">
        <h1 class="text-xl font-bold pb-2">{{ title }}</h1>
        <div class="grid grid-cols-2 gap-4">
            <div class="w-full h-48">
                <img class="w-full h-full object-cover object-center rounded-lg" :src="image" />
            </div>
            <p class="w-full h-48 overflow-auto">
                {{ content }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const datas = defineProps(["title", "image", "content"]);

// console.log(datas);
</script>
