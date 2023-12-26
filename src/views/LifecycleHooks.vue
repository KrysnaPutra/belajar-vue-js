<template>
    <div class="w-full min-h-screen bg-gray-900 p-5 text-white">
        <div class="bg-slate-800 p-5 mb-5 rounded-md border-[1px] border-gray-500 antialiased">
            <h1>Registering Lifecycle Hooks test</h1>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, onUpdated } from 'vue';

onMounted(function(){
    console.log("This Component Now Is Mounted");
})
onUnmounted(function(){
    console.log("This Component Is Now Unmounted");
})
onUpdated(function(){
    console.log("This Component Is Now Updated");
})
</script>
