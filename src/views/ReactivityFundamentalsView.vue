<template>
    <div>
        <!-- Declaring Reactive State -->
        <div class="bg-gray-300 rounded-md shadow-sm m-5 p-5">
            <h1 class="text-xl font-bold">Declaring Reactive State</h1>
            <button
                class="bg-red-600 hover:bg-red-400 text-white font-medium px-2 py-1 rounded-md shadow-sm active:bg-black"
                @click="count.num1 += 2"
            >
                w/o function: Click Me {{ count.num1 }}
            </button>
            <br /><br />
            <button
                class="bg-red-600 hover:bg-red-400 text-white font-medium px-2 py-1 rounded-md shadow-sm active:bg-black"
                @click="fCount"
            >
                w function: Click Me {{ count.num2 }}
            </button>
        </div>

        <!-- Deep Reactivity -->
        <div class="bg-gray-300 rounded-md shadow-sm m-5 p-5">
            <h1 class="text-xl font-bold">Deep Reactivity</h1>
            <button
                @click="mutateDeeply"
                class="bg-purple-700 text-white px-2 py-1"
            >
                Mutate!
            </button>
            <ul>
                <li>Nested Count: {{ obj.nested.count }}</li>
                <li>Array: {{ obj.arr }}</li>
            </ul>
        </div>

        <!-- DOM Update Timing -->
        <div class="bg-gray-300 rounded-md shadow-sm m-5 p-5">
            <h1 class="text-xl font-bold">DOM Update Timing</h1>
            <span>{{ countt }}</span>
        </div>

        <!-- reactive() -->
        <div class="bg-gray-300 rounded-md shadow-sm m-5 p-5">
            <h1 class="text-xl font-bold">reactive()</h1>
            <div class="flex items-center gap-4">
                <button
                    class="w-8 h-8 bg-yellow-400 hover:bg-yellow-200 active:bg-yellow-800 duration-200 rounded-full"
                    @click="state.count++"
                ></button>
                <span>Click dat sun</span>
            </div>
            <p>Number: {{ state.count }}</p>
        </div>

        <!-- Caveat when Unwrapping in Templates -->
        <div class="bg-gray-300 rounded-md shadow-sm m-5 p-5">
            <h1 class="text-xl font-bold">
                Caveat when Unwrapping in Templates
            </h1>
            <div>NumBer Variable: {{ numBer + 1 }}</div>
            <div>obJect Variable: {{ id + 2 }} or {{ obJect.id.value + 2 }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref, nextTick, reactive } from "vue";

// Declaring Reactive State
const count = ref({
    num1: 0,
    num2: 0,
});

// Deep Reactivity
const obj = ref({
    nested: {
        count: 1,
    },
    arr: ["Amb", "Atu"],
});
function fCount() {
    count.value.num2++;
}
function mutateDeeply() {
    obj.value.nested.count++, obj.value.arr.push("Bus");
}

// DOM Update Timing
const countt = ref(0);
async function increment() {
    countt.value++;
    await nextTick();
}
increment();
// reactive()========================
const state = reactive({ count: 0 });

// Raw vs Reactive (proxy)
const proxy = reactive({});
const raw = {};
// Retrun false
// console.log(proxy == raw);
// Nested in proxy behave differntly
// proxy.nested = raw;
// console.log(proxy.nested);
// console.log(raw);
// Return false
// console.log(proxy.nested == raw);
// ==================================

// Additional Ref Unwrapping Details============================
// ref share variable to reactive object globaly if reactive obj same name with ref variable
const counttt = ref(0);
const stateee = reactive({
    counttt,
});

// console.log(counttt.value);
// if ref value altered, reactive obj that same name with variable will change too
counttt.value += 10;
// console.log(stateee.counttt);s

const otherCounttt = ref(20);
// if reactive obj that have same name with previous ref variable appned with another ref, the value on ref will change but name is not
stateee.counttt = otherCounttt;

// console.log(stateee.counttt);
// console.log(counttt.value);

// Caveat/careful in Arrays and Collections
const books = reactive([ref("Vue 3 Guide")]);
// console.log(books[0].value)

const map = reactive(new Map([["count", ref(2013)]]));
// console.log(map.get('count').value);
// ============================================================

// Caveat when Unwrapping in Templates
const numBer = ref(0);
const obJect = {
    id: ref(0),
};
const {id} = obJect;
console.log(id);
</script>
