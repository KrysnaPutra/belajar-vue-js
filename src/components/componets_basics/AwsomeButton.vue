<template>
    <button
        v-on:click="count++"
        class="bg-black border-[2px] border-black text-white px-2 py-1 font-medium hover:bg-white hover:text-black duration-200 rounded-sm"
    >
        Click Me: {{ count }}
    </button>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
</script>
