<template v-if="navTab == true">
    <aside class="w-60 flex flex-col h-screen bg-cyan-800 py-4 gap-5 overflow-y-scroll custom-scroll group hover-wake-scroll">
        <!-- Logo -->
        <a href="https:www.google.com/" class="px-2 select-none">
            <img src="../assets/images/logo-white.png" style="user-drag: none;" />
        </a>
        <!-- Nav Link -->
        <div class="text-white flex flex-col gap-2">
            <router-link
                :to="{ name: 'TemplateSyntax' }"
                active-class="font-bold underline bg-cyan-700 text-black"
                class="font-medium hover:text-black px-2"
                >Template Syntax</router-link
            >

            <router-link
                :to="{ name: 'ReactivityFundamentals' }"
                active-class="font-bold underline bg-cyan-700 text-black"
                class="font-medium hover:text-black px-2"
                >Reactivity Fundamentals</router-link
            >

            <router-link
                :to="{ name: 'ComputedProperties' }"
                active-class="font-bold underline bg-cyan-700 text-black"
                class="font-medium hover:text-black px-2"
                >Computed Properties</router-link
            >

            <router-link
                :to="{ name: 'ClassandStyleBindings' }"
                active-class="font-bold underline bg-cyan-700 text-black"
                class="font-medium hover:text-black px-2"
                >Class and Style Bindings</router-link
            >

            <router-link
                :to="{ name: 'ConditionalRendering' }"
                active-class="font-bold underline bg-cyan-700 text-black"
                class="font-medium hover:text-black px-2"
                >Conditional Rendering</router-link
            >

            <router-link
                :to="{ name: 'ListRendering' }"
                active-class="font-bold underline bg-cyan-700 text-black"
                class="font-medium hover:text-black px-2"
                >List Rendering</router-link
            >

            <router-link
                :to="{ name: 'EventHandling' }"
                active-class="font-bold underline bg-cyan-700 text-black"
                class="font-medium hover:text-black px-2"
                >Event Handling</router-link
            >
        </div>
    </aside>
</template>

<script setup>
// import { useRouter } from "vue-router";
import { ref } from 'vue'
</script>
