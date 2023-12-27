<template>
    <div class="bg-slate-800 min-h-screen w-full p-5 text-white">
        <!-- Basic Example -->
        <div
            class="bg-gray-700 p-5 mb-5 border-[1px] border-gray-400 rounded-md antialiased shadow-md"
        >
            <h1 class="font-bold text-xl">Basic Example</h1>
            <div>
                <h2 class="font-medium">Basic Example</h2>
                <p>Ask a Yes or No Question!</p>
                <input
                    class="text-black"
                    v-model="question"
                    v-bind:disabled="loading"
                />
                <p class="capitalize">{{ answer }}</p>
                <img class="h-24" :src="img" />
            </div>

            <hr class="border-gray-400 border-[1px] m-5" />

            <div>
                <h2 class="font-medium">Watch Source Types</h2>
                <button
                    @click="x++"
                    class="hover:underline bg-black rounded-sm px-2 py-1 mb-2"
                >
                    Increment x Value
                </button>
                <br />
                <button
                    @click="y++"
                    class="hover:underline bg-black rounded-sm px-2 py-1"
                >
                    Increment y Value
                </button>
                <ul class="list-disc pl-5">
                    <li>{{ singleRef }}</li>
                    <li>{{ getter }}</li>
                    <li>{{ arrayOfMultipleSources }}</li>
                </ul>
                <p>Watch a Property of Reactive Object</p>
                <button
                    @click="reactive_X.count++"
                    class="hover:underline bg-black rounded-sm px-2 py-1"
                >
                    Increment reactive_X.count value
                </button>
                <p>{{ reactive_X.count }}</p>
            </div>
        </div>

        <!-- Deep Watchers -->
        <div
            class="bg-gray-700 p-5 mb-5 border-[1px] border-gray-400 rounded-md antialiased shadow-md"
        >
            <h1 class="font-bold text-xl">Deep Watchers</h1>
            <div>
                <h2 class="font-medium">Basic Deep Watchers</h2>
                <button
                    @click="dwObj.count++"
                    class="hover:underline bg-black px-2 py-1 rounded-sm"
                >
                    Increment dwObj.count Value
                </button>
                <p>{{ dwObjInfo }}</p>
            </div>
        </div>

        <!-- Eager Watchers -->
        <div
            class="bg-gray-700 p-5 mb-5 border-[1px] border-gray-400 rounded-md antialiased shadow-md"
        >
            <h1 class="font-bold text-xl">Eager Watchers</h1>
            <div>
                <h2 class="font-medium">Eager Watchers</h2>
                <button
                    v-on:click="ewObj.count += 2"
                    class="bg-black hover:underline rounded-sm px-2 py-1"
                >
                    Increment ewObjInfo.count Value
                </button>
                <p>{{ ewObjInfo }}</p>
            </div>
        </div>

        <!-- watchEffect() -->
        <div
            class="bg-gray-700 p-5 mb-5 border-[1px] border-gray-400 rounded-md antialiased shadow-md"
        >
            <h1 class="font-bold text-xl">watchEffect()</h1>
            <div>
                <h2 class="font-medium">Without watchEffect()</h2>
                <button
                    v-on:click="nWeToDoId++"
                    class="bg-black px-2 py-1 hover:underline rounded-sm"
                >
                    Click Me!
                </button>
                <p>
                    {{ nWeData }}
                </p>
            </div>
            <div>
                <h2 class="font-medium">With watchEffect()</h2>
                <button
                    v-on:click="weToDoId++"
                    class="bg-black px-2 py-1 hover:underline rounded-sm"
                >
                    Click Me!
                </button>
                <p>
                    {{ weData }}
                </p>
            </div>
        </div>

        <!-- Callback Flush Timing -->
        <div
            class="bg-gray-700 p-5 mb-5 border-[1px] border-gray-400 rounded-md antialiased shadow-md"
        >
            <h1 class="font-bold text-xl">Callback Flush Timing</h1>
            <div>
                <h2 class="font-medium">Callback Flush Timing</h2>
                <button
                    @click="cftIncrement++"
                    class="bg-black px-2 py-1 hover:underline"
                >
                    Increment
                </button>
                <p>{{ cftData }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, reactive, watchEffect } from "vue";

// Basic Example
const question = ref("");
const answer = ref("Question usually contain a question mark(?). ;D");
const img = ref("https://i.ytimg.com/vi/gDjMZvYWUdo/hqdefault.jpg");
const loading = ref(false);

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
    if (newQuestion.includes("?")) {
        loading.value = true;
        answer.value = "Thinking";

        try {
            const res = await fetch("https://yesno.wtf/api");
            const datas = await res.json();
            console.log(datas);
            answer.value = datas.answer;
            img.value = datas.image;
        } catch (error) {
            answer.value = "Error! Could not reach the API " + error;
            img.value = "https://i.ytimg.com/vi/gDjMZvYWUdo/hqdefault.jpg";
        } finally {
            loading.value = false;
        }
    }
});

const x = ref(0);
const y = ref(0);

// single ref
const singleRef = ref("Empty");
watch(x, (newX) => {
    // console.log("x is " + newX);
    singleRef.value = `x is ${newX}`;
});

// getter
const getter = ref("Empty");
watch(
    () => x.value + y.value,
    (sum) => {
        // console.log(`x(${x.value}) + y(${y.value}) = ${sum}`);
        getter.value = `x(${x.value}) + y(${y.value}) = ${sum}`;
    }
);

// array of multiple sources
const arrayOfMultipleSources = ref("Empty");
watch([() => x.value, () => y.value], ([newX, newY]) => {
    // console.log(`x is ${newX} and y is ${newY}`);
    arrayOfMultipleSources.value = `x is ${newX} and y is ${newY}`;
});

// Watch a property of reactive object
const reactive_X = reactive({
    count: 0,
});
watch(
    () => reactive_X.count,
    (count) => {
        console.log(`reactive_X.count is: ${count}`);
    }
);

// Deep Watchers
const dwObj = reactive({ count: 0 });
const dwObjInfo = ref("Empty");

watch(dwObj, (param1, param2) => {
    // param1/new value and param2/old value will be same because both point to same object
    console.log(param1, param2);
});

watch(
    // Using getter method the new value will take the newer value, and old value will take the previous value
    () => dwObj.count,
    (param1, param2) => {
        dwObjInfo.value = `New Value: ${param1}, Old Value: ${param2}`;
    }
);

// Eager Watchers
const ewObj = reactive({ count: 0 });
const ewObjInfo = ref("");
watch(
    () => ewObj.count,
    (newVal, oldVal) => {
        // console.log(newVal, oldVal);
        ewObjInfo.value = `${newVal} and ${oldVal}`;
    },
    { immediate: true }
);

// watchEffect()

// Without watchEffect()
const nWeToDoId = ref(1);
const nWeData = ref(null);

watch(
    nWeToDoId,
    async () => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${nWeToDoId.value}`
        );
        nWeData.value = await response.json();
        // console.log(nWeData.value);
    },
    { immediate: true }
);

// with watchEffect()
const weToDoId = ref(1);
const weData = ref(null);

watchEffect(async () => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${weToDoId.value}`
    );
    weData.value = await response.json();
    // console.log(weData.value);
});

// Callback Flush Timing
const cftIncrement = ref(0);
const cftData = ref("Empty");
watch(
    cftIncrement,
    (n) => {
        cftData.value = "Value is " + cftIncrement.value;
    },
    { flush: "post" }
);

// Stopping a Watcher
watchEffect(() => {});

// const unwatch = watchEffect(() => {});
// console.log(unwatch());

const varData = ref(null);
watchEffect(() => {
    if(varData.value){
        console.log("varData is unwatched");
    }else{
        console.log("varData is null");
    }
})
</script>
