<template>
    <div
        class="min-h-screen w-full bg-cnsb-image bg-cover bg-no-repeat bg-center bg-blend-overlay bg-black/25 px-10 py-2"
    >
        <!-- Binding HTML Classes -->
        <div
            class="bg-black/50 backdrop-blur-lg text-white p-5 my-5 rounded-md shadow-md"
        >
            <h1 class="text-xl font-bold">Binding HTML Classes</h1>
            <div class="text-sm" v-bind:class="classObject">Some div</div>

            <button
                @click="makeMeError"
                class="bg-white rounded-md px-2 py-1 text-black mr-4"
            >
                Click Me To Make an Error
            </button>
            <button
                @click="makeActive"
                class="bg-white rounded-md px-2 py-1 text-black"
            >
                Click Me To Activater
            </button>
        </div>

        <!-- Binding to Arrays -->
        <div
            class="bg-black/50 backdrop-blur-lg text-white p-5 my-5 rounded-md shadow-md"
        >
            <h1 class="text-xl font-bold">Binding to Arrays</h1>
            <div>
                <div v-bind:class="[activeClass, errorClass]">
                    Active and Error
                </div>
            </div>
        </div>

        <!-- Binding to Objects -->
        <div
            class="bg-black/50 backdrop-blur-lg text-white p-5 my-5 rounded-md shadow-md"
        >
            <h1 class="text-xl font-bold">Binding to Objects</h1>
            <div>
                <span v-bind:style="styleObject"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci commodi facilis mollitia.</span
                >
            </div>
            <h1 class="text-xl font-bold">Binding Style to Array</h1>
            <div>
                <span v-bind:style="['color: blue', 'font-size: 40px']"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci commodi facilis mollitia.</span
                >
            </div>
            <div>
                <span :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">auto vendor prefix</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
// Binding HTML Classes ================================
const isActive = ref(true);
const error = ref(null);
const classObject = computed(() => ({
    active: !isActive.value,
    "text-red-500": error.value != null,
}));
function makeActive() {
    isActive.value == true ? (isActive.value = false) : (isActive.value = true);
}
function makeMeError() {
    error.value == null
        ? (error.value = "error is clicked")
        : (error.value = null);
}
// =====================================================
// Binding to Arrays ===================================
const activeClass = ref("active");
const errorClass = ref("text-red-500");
// =====================================================
// Binding to Objects ==================================
const styleObject = reactive({
    color: 'red',
    "font-size": '50px'
});
</script>

<style scoped>
.active {
    text-decoration: underline;
}
</style>
