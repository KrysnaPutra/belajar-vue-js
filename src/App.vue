<template>
    <div class="flex">
        <sider-component />
        <div class="w-full max-h-screen overflow-auto">
            <router-view />
        </div>
    </div>
</template>

<script setup>
import SiderComponent from "./components/SiderComponent.vue";
import { ref } from "vue";
</script>
