<template>
    <div>
        <!-- n-DOM Root Component Template -->
        <div class="bg-gray-200 mx-10 my-5 rounded-md shadow-sm p-5">
            <h1 class="font-medium">In-DOM Root Component Template</h1>
            <button
                v-on:click="count++"
                class="bg-cyan-700 text-white py-1 px-2 rounded-md"
            >
                Click Me: {{ count }}
            </button>
        </div>

        <!-- Raw HTML -->
        <div class="bg-gray-200 mx-10 my-5 rounded-md shadow-sm p-5">
            <h1 class="font-medium">Raw HTML</h1>
            <p>Using text interpolation: {{ rawHtml }}</p>
            <p>Using raw HTML: <span v-html="rawHtml"></span></p>
        </div>

        <!-- Attribute Bindings -->
        <div class="bg-gray-200 mx-10 my-5 rounded-md shadow-sm p-5">
            <h1 class="font-medium">Attribute Bindings</h1>
            <div>
                <h2 class="underline">"v-bind:src" on img element</h2>
                <img v-bind:src="imgUrl" class="h-24" />
            </div>
            <br />
            <div>
                <h2 class="underline">"v-bind:id" on some element</h2>
                <p v-bind:id="someId" v-on:click="switchSomeId">
                    This element id = "{{ someId }}"
                </p>
            </div>
            <br />
            <div>
                <h2 class="underline">
                    Boolean Attributes: "v-bind:disabled=true/false" on button
                    element
                </h2>
                <button
                    v-bind:disabled="isDisabled"
                    class="bg-cyan-700 px-2 py-1 text-white disabled:bg-cyan-500"
                >
                    Click Me
                </button>
            </div>
            <div>
                <h2 class="underline">
                    Dynamically Binding Multiple Attributes
                </h2>
                <span v-bind="multipleAttribute"
                    >This element has id="{{ multipleAttribute.id }}" and
                    class="{{ multipleAttribute.class }}"</span
                >
            </div>
        </div>

        <!-- Using JavaScript Expressions​ -->
        <div class="bg-gray-200 mx-10 my-5 rounded-md shadow-sm p-5">
            <h1 class="font-medium">Using JavaScript Expressions</h1>
            <p>Simple summation: {{ number + 1 }}</p>
            <p>Simple condition: {{ status ? "OK" : "NOT OK" }}</p>
            <p>
                Simple string manipulation:
                {{ messege.split(" ").reverse().join(" ") }}
            </p>
        </div>

        <!-- Calling Functions -->
        <div class="bg-gray-200 mx-10 my-5 rounded-md shadow-sm p-5">
            <h1 class="font-medium">Calling Functions</h1>
            <time
                :datetime="timeDate"
                :title="generateTitleDateTime(timeDate)"
                >{{ formatTimeDate() }}</time
            >
        </div>

        <!-- Directives​ -->
        <div class="bg-gray-200 mx-10 my-5 rounded-md shadow-sm p-5">
            <h1 class="font-medium">Directives</h1>
            <p v-if="seen">Bomb has been planted</p>
            <p v-else>Bomb has been defused</p>

            <br />

            <a class="hover:underline" v-bind:href="gUrl" target="_blank"
                >to Google.com</a
            >
            |
            <a class="hover:underline" :href="ytUrl" target="_blank"
                >to Youtube.com</a
            >

            <br /><br />

            <button
                v-on:click="clicked = 'Clicked Ya'"
                class="bg-red-500 hover:bg-red-300 duration-200 text-white rounded-md px-2 py-1 shadow-sm"
            >
                Click Me
            </button>
            <p v-on:click="clicked = ''" class="hover:bg-gray-300 w-fit">
                {{ clicked }}
            </p>
        </div>

        <!-- Dynamic Arguments -->
        <div class="bg-gray-200 mx-10 my-5 rounded-md shadow-sm p-5">
            <h1 class="font-medium">Dynamic Arguments</h1>
            <a v-bind:[keyy]="valueOfKeyy" :[keyyy]="valueOfKeyyy">help</a>
            <br />
            <button
                v-on:[onKeyy]="valueOnKeyy()"
                class="bg-gray-500 hover:bg-gray-300 hover:text-black duration-200 rounded-md text-white px-2 py-1"
            >
                Count is: {{ countKeyy }}
            </button>
        </div>

        <!-- Modifiers : prevent -->
        <div class="bg-gray-200 mx-10 my-5 rounded-md shadow-sm p-5">
            <h1 class="font-medium">Modifiers</h1>
            <form v-on:submit.prevent="submitFunction">
                <input
                    type="text"
                    name="fname"
                    placeholder="Input your first name..."
                />
                <input
                    type="submit"
                    value="Enter"
                    class="bg-gray-500 hover:bg-gray-300 px-2 text-white cursor-pointer"
                />
            </form>
            <FormAbc />
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import FormAbc from "../components/FormAbc.vue";
// n-DOM Root Component Template
const count = ref(0);

// Raw HTML
const rawHtml = ref(`
<span style='color: red;'>This should be red.</span>
`);

// Attribute Bindings
const imgUrl = ref(
    "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
);
const someId = ref("id-ganteng");
const isDisabled = ref(true);
const multipleAttribute = ref({
    id: "id-multipleAttribute",
    class: "bg-red-500 text-white",
});

// Using JavaScript Expressions
const exId = ref(12);
const number = ref(100);
const status = ref(false);
const messege = "Hello World";

// Calling Functions
const timeDate = ref(new Date("2023-03-25"));
function formatTimeDate() {
    return (
        timeDate.value.getDay() +
        " " +
        timeDate.value.toLocaleString("default", { month: "long" }) +
        " " +
        timeDate.value.getFullYear()
    );
}
function generateTitleDateTime(param) {
    return param.getTime() + " Date Title";
}

// Directives
const seen = ref(false);
const gUrl = ref("https://www.google.com");
const ytUrl = ref("https://www.youtube.com");

const clicked = ref("");
const cassaDel = ref(null);

// Dynamic Arguments
const keyy = ref("href");
const valueOfKeyy = ref("https://www.google.com");
const keyyy = ref("target");
const valueOfKeyyy = ref("_blank");

const onKeyy = ref("click");
const countKeyy = ref(0);
const valueOnKeyy = () => {
    return countKeyy.value++;
};

// Modifiers
function submitFunction(e) {
    // e.preventDefault();
    alert('yeah? no!');
}
</script>

<style scoped></style>
