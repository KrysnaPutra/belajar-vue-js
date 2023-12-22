<template>
    <div class="bg-pink-200 w-full min-h-screen p-5">
        <!-- Basic v-for -->
        <div class="bg-yellow-100 mb-5 p-5">
            <h1 class="italic font-bold text-xl">v-for</h1>
            <div>
                <h2 class="font-bold">Basic v-for</h2>
                <ul>
                    <h2 class="font-bold">example</h2>
                    <li v-for="(item, index) in items" :key="item.id">
                        {{ parent + " " + index }}: {{ item.id }} -
                        {{ item.stuff }}. Quantity: {{ item.qty }}
                    </li>
                    <h2 class="font-bold">Anoter example using object</h2>
                    <li v-for="({ stuff, id, qty }, index) in items" :key="id">
                        {{ parent + " " + index }}: {{ id }} - {{ stuff }}.
                        Quantity: {{ qty }}
                    </li>
                </ul>
                <br />
                <h2 class="font-bold">Nested v-for (parent and child)</h2>
                <ul>
                    <li
                        v-for="anotherItem in anotherItems"
                        :key="anotherItem.name"
                    >
                        {{ anotherItem.name }} have hobbies:
                        <span
                            v-for="(hobbies, index, key) in anotherItem.hobbies"
                            :key="key"
                        >
                            {{ hobbies
                            }}{{
                                Number(index) + 1 < anotherItem.hobbies.length
                                    ? ", "
                                    : ""
                            }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- v-for on object -->
        <div class="bg-yellow-100 mb-5 p-5">
            <h1 class="italic font-bold text-xl">v-for on object</h1>
            <div>
                <ul v-for="(value, key) in objStudent">
                    {{
                        key.toUpperCase() + ": " + value
                    }}
                </ul>
            </div>
        </div>

        <!-- v-for with range -->
        <div class="bg-yellow-100 mb-5 p-5">
            <h1 class="italic font-bold text-xl">v-for with range</h1>
            <div>
                <span v-for="n in 10">
                    {{ n }}
                </span>
            </div>
        </div>

        <!-- v-for with v-if -->
        <div class="bg-yellow-100 mb-5 p-5">
            <h1 class="italic font-bold text-xl">v-for with v-if</h1>
            <div>
                <ul>
                    <li v-for="(value, index) in vforvifData" :key="index">
                        <div v-if="value.score > 5">
                            {{ value.name }} |
                            {{ value.score }}
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- v-for on component -->
        <div class="bg-yellow-100 mb-5 p-5">
            <h1 class="italic font-bold text-xl">v-for with v-if</h1>
            <div>
                <vfor-component v-for="n in 10" :key="n"></vfor-component>
            </div>
        </div>

        <!-- Replacing an Array -->
        <div class="bg-yellow-100 mb-5 p-5">
            <h1 class="italic font-bold text-xl">Replacing an Array</h1>
            <div>
                <!-- <button @click="filterDunia" class="py-1 px-2 bg-black text-white font-medium rounded-sm">Click me to show messege contain "dunia"</button> -->
                <ul>
                    <li v-for="value in filterDunia" :key="value.id">
                        <h1>From: {{ value.name }}</h1>
                        <p>Messege: {{ value.msg }}</p>
                        <br />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import VforComponent from "../components/VforComponent.vue";

// Basic v-for =================================
const parent = ref("Stuff");
const items = ref([
    {
        id: 1,
        qty: 5,
        stuff: "Fuji Apple",
    },
    {
        id: 2,
        qty: 1,
        stuff: "Long Sticky Rice",
    },
]);

const anotherItems = ref([
    {
        name: "John Doe",
        hobbies: ["hiking", "biking", "cooking"],
    },
    {
        name: "Jane Doe",
        hobbies: ["jogging", "running", "shoping"],
    },
]);
// ============================================
// v-for with object===========================
const objStudent = reactive({
    name: "Nyoman Ganteng",
    focus: "Sport",
    grade: 11,
});
// ============================================
// v-for with v-if ============================
const vforvifData = reactive([
    {
        name: "Jake Doe",
        score: 8,
    },
    {
        name: "John Doe",
        score: 5,
    },
    {
        name: "Jane Doe",
        score: 3,
    },
]);
// Array Change Detection ======================
const ide = ref(1);
const msgItem = ref([
    {
        id: ide.value++,
        name: "Benny",
        msg: "Halo saya ganteng",
    },
    {
        id: ide.value++,
        name: "Gummy",
        msg: "Halo dunia",
    },
    {
        id: ide.value++,
        name: "Joko",
        msg: "Perang Dunia",
    },
]);
const filterDunia = computed(() => {
    return msgItem.value.filter((param) => param.msg.match(/dunia/i));
});

// console.log(filterDunia);
</script>
