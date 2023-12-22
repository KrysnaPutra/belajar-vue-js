<template>
    <div>
        <!-- Basic Example -->
        <div class="bg-purple-300 rounded-md m-10 p-5">
            <h1 class="bg-black text-white font-bold text-xl w-fit">
                Basic Example
            </h1>
            <div class="bg-white">
                <h1 class="underline">Not Using Computed Function</h1>
                <h2>Author: {{ author.name }}</h2>
                <div>
                    Has Published Books:
                    {{ author.books.length ? "Yes" : "No" }}
                </div>
            </div>
            <div class="bg-gray-200">
                <h1 class="underline">Using Computed Function</h1>
                <h2>Author: {{ author.name }}</h2>
                <div>Has Published Books: {{ PublishedBooksMessege }}</div>
            </div>
        </div>

        <!-- Computed Caching vs. Methods -->
        <div class="bg-purple-300 rounded-md m-10 p-5">
            <h1 class="bg-black text-white font-bold text-xl w-fit">
                Computed Caching vs. Methods
            </h1>
            <div class="bg-white">
                <h1>Use Normal Methods</h1>
                <p>{{ calculateBooksMessege() }}</p>
            </div>
            <div class="bg-gray-200">
                <h1>Use Computed Caching Methods</h1>
                <p>{{ PublishedBooksMessege }}</p>
            </div>
        </div>

        <!-- Writable Computed -->
        <div class="bg-purple-300 rounded-md m-10 p-5">
            <h1 class="bg-black text-white font-bold text-xl w-fit">
                Writable Computed
            </h1>
            <div>Current Name: {{ fullN }}</div>
            <button
                @click="changeName('param1', 'param2')"
                class="bg-black text-white rounded-md shadow-sm px-2 py-1 hover:text-black hover:bg-white hover:duration-200 active:bg-red-500"
            >
                Click Me
            </button>
        </div>
    </div>
</template>

<script setup>
import { reactive, computed, ref } from "vue";

// Basic Example
const author = reactive({
    name: "John Doe",
    books: [
        "Help Me Faith - Volume 1",
        "Vue for Beginner - Edition 2",
        "The Deep - 2029",
        "No Smart, No Fard",
    ],
});

const PublishedBooksMessege = computed(function () {
    return author.books.length > 0 ? "Yes" : "No";
});

// Computed Caching vs. Methods
function calculateBooksMessege() {
    return author.books.length > 0 ? "Yes" : "No";
}

// Writable Computed
const fName = ref("Jane");
const lName = ref("Doe");

const fullN = computed({
    // getter
    get() {
        return fName.value + " " + lName.value;
    },
    // setter
    set(param1, param2) {
        fName.value = param1;
        lName.value = param2;
        return fName.value + " " + lName.value;
    },
});

function changeName(param1, param2) {
    // console.log(fullN._setter("param1", "param2"));
    return fullN._setter(param1,  param2);
}
</script>
