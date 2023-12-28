<template>
    <div class="bg-gray-200 w-full min-h-screen p-5">
        <!-- Accessing the Refs -->
        <div
            class="bg-slate-100 p-5 mb-5 rounded-md shadow-sm border-gray-400 border-[1px] border-separate"
        >
            <h1 class="text-xl font-bold">Accessing the Refs</h1>
            <div>
                <input ref="input" class="border-[2px] border-gray-500" />
            </div>
        </div>

        <!-- Refs inside v-for -->
        <div
            class="bg-slate-100 p-5 mb-5 rounded-md shadow-sm border-gray-400 border-[1px] border-separate"
        >
            <h1 class="text-xl font-bold">Refs inside v-for</h1>
            <div>
                <h2 class="font-medium">Render by this page</h2>
                <ul class="list-disc pl-5">
                    <li v-for="item in list" ref="itemRefs" :key="item.nim">
                        <p>{{ item.nim }}</p>
                        <p>{{ item.nama }}</p>
                        <p>{{ item.prodi }}</p>
                    </li>
                </ul>
                <h2 class="font-medium">Render by template refs</h2>
                <div>
                    {{ itemRefsRender }}
                </div>
            </div>
        </div>

        <!-- Function Refs -->
        <div
            class="bg-slate-100 p-5 mb-5 rounded-md shadow-sm border-gray-400 border-[1px] border-separate"
        >
            <h1 class="text-xl font-bold">Function Refs</h1>
            <div>
                <input
                    value="static html value"
                    :ref="(frData = el())"
                    class="border-[2px] border-gray-5001"
                />
                <h2 class="font-medium">Render function data result</h2>
                <div>{{ frDataRender }}</div>
            </div>
        </div>

        <!-- Ref on Component -->
        <div
            class="bg-slate-100 p-5 mb-5 rounded-md shadow-sm border-gray-400 border-[1px] border-separate"
        >
            <h1 class="text-xl font-bold">Ref on Component</h1>
            <div>
                <child-temp-ref ref="rocChild"></child-temp-ref>
                <p>var a: {{ rocChild.a }}</p>
                <p>var b: {{ rocChild.b }}</p>
            </div>

            <i class="fa fa-cloud text-3xl text-blue-600"></i>
            <i class="fa fa-heart"></i>
            <i class="fa fa-car"></i>
            <i class="fa fa-file"></i>
            <i class="fa fa-bars"></i>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Accessubg the Refs
const input = ref(null);

onMounted(() => {
    if (input.value) {
        // console.log("input is focused");
        input.value.focus();
        input.value.value = "This is pre-rendered value";
    } else {
        console.log("someting happened");
    }
});

// Refs inside v-for
const list = ref([
    {
        nim: 123,
        nama: "Nyoman Test",
        prodi: "TI-MDI",
    },
    {
        nim: 124,
        nama: "Ketut Sigit",
        prodi: "TI-DGM",
    },
]);
const itemRefs = ref([]);
const itemRefsRender = ref("");
onMounted(() => {
    if (itemRefs.value) {
        // console.log(itemRefs.value[0].childNodes);
        for (let index of itemRefs.value) {
            for (let index2 of index.childNodes) {
                itemRefsRender.value += index2.innerHTML + " ";
            }
        }
    } else {
        console.log("false");
    }
});

// Function Refs
function el() {
    return "This is result of function";
}
const frData = ref(null);
const frDataRender = ref(null);
onMounted(() => {
    frDataRender.value = frData.value;
});

// Ref on Component
import ChildTempRef from "../components/ChildTR.vue";
const rocChild = ref("");
const rocChildRender = ref({});
onMounted(() => {
    rocChildRender.value = rocChild.value;
});
</script>
