<template>
    <div class="w-1/2 bg-white text-black p-3 rounded-md">
        <div class="flex items-center">
            <h1 class="flex-1 text-xl font-bold">{{ title }}</h1>
            <div class="flex items-center gap-4">
                <button
                    class="w-fit text-2xl hover:text-gray-200"
                    v-on:click="$emit('enlarge-button')"
                >
                    +
                </button>
                <button
                    class="w-fit text-2xl hover:text-gray-200"
                    v-on:click="$emit('shrink-button')"
                >
                    -
                </button>
            </div>
        </div>
        <img class="h-32 w-full object-cover rounded-md" :src="image" />
        <p :style="resize">{{ content }}</p>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const datas = defineProps(["title", "image", "content", "resize"]);
const emits = defineEmits(["enlarge-button", "shrink-button"]);
</script>
