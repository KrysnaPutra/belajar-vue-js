<template>
    <div class="bg-white min-h-screen w-full p-5">
        <!-- Example -->
        <div
            class="mb-5 p-5 bg-white rounded-md border-[2px] border-gray-200 shadow-sm"
        >
            <h1 class="text-xl font-bold">Example</h1>
            <div>
                <h2 class="font-medium">Example Manual</h2>
                <input
                    class="border-[2px] border-black px-1 outline-none"
                    type="text"
                    v-bind:value="text"
                    @input="(event) => (text = event.target.value)"
                />
                <p>{{ text }}</p>
            </div>
            <hr />
            <div>
                <h2 class="font-medium">Example v-model</h2>
                <input
                    class="border-[2px] border-black px-1 outline-none"
                    type="text"
                    v-model="textButUsingModel"
                />
                <p>{{ textButUsingModel }}</p>
            </div>
        </div>

        <!-- Basic Usage -->
        <div
            class="mb-5 p-5 bg-white rounded-md border-[2px] border-gray-200 shadow-sm"
        >
            <h1 class="text-xl font-bold">Basic Usage</h1>
            <div>
                <h2 class="font-medium">Multiline text</h2>
                <!-- <p class="whitespace-pre-line">
                    {{ messeges }}
                </p> -->
                <textarea
                    class="bg-blue-300"
                    v-model="messeges"
                    disabled
                ></textarea>
                <br />
                <textarea
                    class="h-12 border-[1px]"
                    v-model="messeges"
                    placeholder="text contain enter"
                ></textarea>
            </div>
            <hr />
            <div>
                <h2 class="font-medium">Checkbox</h2>
                <input type="checkbox" id="myCheckBox" v-model="checked" />
                <label for="myCheckBox">{{ checked }}</label>
                <h2 class="font-medium">Multiple Checkbox</h2>
                <div>Checked List: {{ multiChecked }}</div>
                <label>
                    <input
                        type="checkbox"
                        id="vegetables"
                        value="Vegetables"
                        v-model="multiChecked"
                    />
                    Vegetables
                </label>

                <label>
                    <input
                        type="checkbox"
                        id="fruits"
                        value="Fruits"
                        v-model="multiChecked"
                    />
                    Fruits
                </label>

                <label>
                    <input
                        type="checkbox"
                        id="dairy"
                        value="Dairy"
                        v-model="multiChecked"
                    />
                    Dairy
                </label>
            </div>
            <hr />
            <div>
                <h2 class="font-medium">Radio</h2>
                <div>You've picked: {{ picked }}</div>

                <label>
                    <input type="radio" value="Male" v-model="picked" />
                    Male
                </label>

                <label>
                    <input type="radio" value="Female" v-model="picked" />
                    Female
                </label>
            </div>
            <hr />
            <div>
                <h2 class="font-medium">Select</h2>
                <div>Selected: {{ selected }}</div>
                <select v-model="selected">
                    <option value="" disabled>Please Select Your Hobby</option>
                    <option value="Bowling">Bowlingg</option>
                    <option value="Running">Running</option>
                    <option value="Jogging">Jogging</option>
                </select>
            </div>
            <hr />
            <div>
                <h2 class="font-bold">Multiple select (bound to array)</h2>
                <div>Your selection: {{ mSelected }}</div>
                <select multiple v-model="mSelected">
                    <option value="Option A">Option A</option>
                    <option value="Option B">Option B</option>
                    <option value="Option C">Option C</option>
                </select>
            </div>
            <hr />
            <div>
                <h2 class="font-medium">Select Dynamic Render</h2>
                <div>You've Selected: {{ dSelected }}</div>

                <select v-model="dSelected">
                    <option
                        v-for="(d, index) in dOption"
                        :key="index"
                        v-bind:value="d.value"
                    >
                        {{ d.text }}
                    </option>
                </select>
            </div>
        </div>

        <!-- Value Bindings -->
        <div
            class="mb-5 p-5 bg-white rounded-md border-[2px] border-gray-200 shadow-sm"
        >
            <h1 class="text-xl font-bold">Value Bindings</h1>
            <div>
                <h2 class="font-medium">Check Box</h2>
                <label>
                    <input
                        type="checkbox"
                        v-model="vbCheckbox"
                        true-value="yes"
                        false-value="nope"
                    />
                    Select Me
                </label>
                <p>Status: {{ vbCheckbox }}</p>
            </div>

            <hr />

            <div>
                <h2 class="font-medium">Check Box v-bind value binding</h2>
                <label>
                    <input
                        type="checkbox"
                        v-model="vbCheckboxBind"
                        v-bind:true-value="vTrueorFalse[0].status"
                        v-bind:false-value="vTrueorFalse[1].status"
                    />
                    Click Me (I am the checkbox behave like radio button)
                </label>
                <p>Status: {{ vbCheckboxBind }}</p>
            </div>

            <hr />

            <div>
                <h2 class="font-bold">Radio</h2>
                <label>
                    <input
                        type="radio"
                        v-model="vRadioGaga"
                        :value="vRadioGagaValue.fail"
                    />
                    Don't Click Me
                </label>

                <label>
                    <input
                        type="radio"
                        v-model="vRadioGaga"
                        :value="vRadioGagaValue.success"
                    />
                    Click Me
                </label>
                <p>{{ vRadioGaga }}</p>
            </div>

            <hr />

            <div>
                <h2 class="font-medium">Select Options</h2>
                <select v-model="vbSelectBind">
                    <option value="" disabled>Select One</option>
                    <option
                        v-for="v in vbSelectValue"
                        :value="v.value"
                        :key="v.id"
                    >
                        {{ v.text }}
                    </option>
                </select>
                <p>{{ vbSelectBind }}</p>
            </div>
        </div>

        <!-- Modifiers -->
        <div
            class="mb-5 p-5 bg-white rounded-md border-[2px] border-gray-200 shadow-sm"
        >
            <h1 class="text-xl font-bold">Modifiers</h1>
            <div>
                <h2>.lazy</h2>
                <input
                    class="border-[2px]"
                    type="text"
                    v-model.lazy="vLazyMsg"
                />
                <p>{{ vLazyMsg }}</p>
            </div>

            <hr />

            <div>
                <h2>.number</h2>
                <input
                    class="border-[2px]"
                    type="number"
                    v-model.number="vNumberMsg"
                />
                <p>{{ vNumberMsg }}</p>
            </div>

            <hr />

            <div>
                <h2>.trim</h2>
                <input
                    class="border-[2px]"
                    type="text"
                    v-model.trim="vTrimMsg"
                />
                <p>{{ vTrimMsg }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
// Basic
const text = ref("");
const textButUsingModel = ref("");

// Multiline text
const messeges = ref("");

// Checkbox
const checked = ref(false);
const multiChecked = ref([]);

// Radio
const picked = ref("");

// Select
const selected = ref("");

// Multiple Select
const mSelected = ref([]);

// Dynamic Select
const dSelected = ref("A");

const dOption = ref([
    { text: "Value A", value: "A" },
    { text: "Value B", value: "B" },
    { text: "Value C", value: "C" },
]);

// Value Binding Checkbox
const vbCheckbox = ref("yes");

const vbCheckboxBind = ref("Not Okay");
const vTrueorFalse = ref([{ status: "Okay" }, { status: "Not Okay" }]);

// Value Binding Radio
const vRadioGaga = ref(" ");
const vRadioGagaValue = ref({
    fail: "Nope",
    success: "Yes",
});

// Value Binding Select
const vbSelectBind = ref("");
const vbSelectValue = ref([
    { id: 100, text: "Choose Oranges", value: "Oranges" },
    { id: 101, text: "Choose Apples", value: "Apples" },
    { id: 102, text: "Choose Bananas", value: "Bananas" },
]);

// Modifier
const vLazyMsg = ref("");
const vNumberMsg = ref(0);
const vTrimMsg = ref("");
</script>
