<template>
    <div
        class="bg-space-image bg-blend-overlay bg-no-repeat bg-cover bg-center bg-black/70 w-full min-h-screen p-5"
    >
        <!-- Inline Handlers  -->
        <div
            class="bg-white/70 backdrop-blur-sm w-full p-5 mb-5 rounded-md shadow-sm"
        >
            <h1 class="text-xl font-medium">Inline Handlers</h1>
            <div>
                <button
                    @click="count += 3"
                    class="bg-black px-2 py-1 text-white text-sm rounded-sm"
                >
                    Number is: {{ count }}
                </button>
            </div>
        </div>

        <!-- Method Handlers  -->
        <div
            class="bg-white/70 backdrop-blur-sm w-full p-5 mb-5 rounded-md shadow-sm"
        >
            <h1 class="text-xl font-medium">Inline Handlers</h1>
            <div>
                <div
                    @click="clickMe"
                    class="bg-yellow-500 w-10 h-10 rounded-full shadow-sm hover:shadow-md cursor-pointer active:bg-black"
                ></div>
                <span>Click the Sun</span>
            </div>
        </div>

        <!-- Calling Methods in Inline Handlers  -->
        <div
            class="bg-white/70 backdrop-blur-sm w-full p-5 mb-5 rounded-md shadow-sm"
        >
            <h1 class="text-xl font-medium">
                Calling Methods in Inline Handlers
            </h1>
            <div>
                <button
                    @click="greaterGreet('Hello')"
                    class="bg-blue-800 px-2 py-1 text-white rounded-sm shadow-sm hover:shadow-md"
                >
                    Say Hello
                </button>
                <br /><br />
                <button
                    @click="greaterGreet('Welcome to Jungle')"
                    class="bg-blue-800 px-2 py-1 text-white rounded-sm shadow-sm hover:shadow-md"
                >
                    Say Welcome to Jungle
                </button>
            </div>
        </div>

        <!-- Accessing Event Argument in Inline Handlers  -->
        <div
            class="bg-white/70 backdrop-blur-sm w-full p-5 mb-5 rounded-md shadow-sm"
        >
            <h1 class="text-xl font-medium">
                Accessing Event Argument in Inline Handlers
            </h1>
            <div>
                <h2>Using Special Event Variable</h2>
                <button
                    @click="
                        warn('Oops, you cannot submit this button!', $event)
                    "
                    class="bg-black px-2 py-1 text-white shadow-sm hover:shadow-md rounded-sm"
                >
                    Try Me
                </button>
                <h2>Using In Line Arrow Function</h2>
                <button
                    @click="
                        (event) =>
                            warn('Oops, you cannot submit this button!', event)
                    "
                    class="bg-black px-2 py-1 text-white shadow-sm hover:shadow-md rounded-sm"
                >
                    Try Me
                </button>
            </div>
        </div>

        <!-- Event Modifiers  -->
        <div
            class="bg-white/70 backdrop-blur-sm w-full p-5 mb-5 rounded-md shadow-sm"
        >
            <h1 class="text-xl font-medium">Event Modifiers</h1>
            <div>
                <h2 class="font-medium">
                    the click event's propagation will be stopped
                </h2>
                <a
                    v-on:click="doThis('parent')"
                    class="cursor-pointer w-24 h-12 bg-white hover:bg-gray-100 flex items-center justify-center"
                >
                    <div
                        v-on:click.stop="doThis('child')"
                        class="bg-blue-600 hover:bg-blue-400 rounded-full w-8 h-8"
                    ></div>
                </a>

                <hr />
                <br />

                <h2 class="font-medium">
                    the submit event will no longer reload the page
                </h2>
                <form @submit.prevent="submitMe">
                    <input
                        class="outline outline-1 rounded-sm shadow-sm"
                        type="text"
                        name="submit_text"
                        placeholder="Input some text"
                    />
                    <input
                        class="bg-black px-2 text-white shadow-sm hover:shadow-md rounded-sm ml-2 cursor-pointer"
                        type="submit"
                        value="Enter"
                    />
                </form>

                <hr />
                <br />

                <h2 class="font-medium">modifiers can be chained</h2>
                <a
                    class="hover:underline"
                    href="https://www.google.com"
                    v-on:click.stop.prevent="
                        (event) =>
                            doThis('. not redirect to: ' + event.target.href)
                    "
                    >Click Me</a
                >

                <hr />
                <br />

                <h2 class="font-medium">just the modifier</h2>
                <form @submit.prevent="">
                    <input
                        class="outline outline-1 rounded-sm shadow-sm"
                        type="text"
                        name="submit_text"
                        placeholder="Input some text"
                    />
                    <input
                        class="bg-black px-2 text-white shadow-sm hover:shadow-md rounded-sm ml-2 cursor-pointer"
                        type="submit"
                        value="Enter"
                    />
                </form>

                <hr />
                <br />

                <h2 class="font-medium">just the modifier</h2>
                <div class="flex items-center gap-2">
                    <div
                        class="w-16 h-16 bg-emerald-500 rounded-full cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center"
                        @click.self="doThat('From Parent')"
                    >
                        <div
                            class="w-8 h-8 bg-black rounded-full"
                            @click="doThat('From Child')"
                        ></div>
                    </div>
                    <span>Click Green or Black Only</span>
                </div>

                <hr />
                <br />

                <h2 class="font-medium">
                    use capture mode when adding the event listener
                </h2>
                <!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
                <div>
                    <div
                        id="grandParent"
                        class="bg-red-500 hover:bg-red-400 w-36 h-36"
                    >
                        <div
                            id="subParent"
                            class="bg-yellow-500 hover:bg-yellow-400 w-24 h-24"
                            @click="doIt()"
                        >
                            <div
                                id="child"
                                class="bg-green-500 hover:bg-green-400 w-12 h-12"
                            ></div>
                        </div>
                    </div>
                </div>

                <hr />
                <br />

                <h2 class="font-medium">
                    the click event will be triggered at most once
                </h2>
                <div>
                    <div
                        class="hover:underline cursor-pointer"
                        @click.once="doIt"
                    >
                        Click Me (Once)
                    </div>
                </div>

                <hr />
                <br />

                <h2 class="font-medium">
                    the scroll event's default behavior (scrolling) will happen
                </h2>
                <!-- immediately, instead of waiting for `onScroll` to complete -->
                <!-- in case it contains `event.preventDefault()` -->
                <div>
                    <div
                        class="cursor-pointer w-36 h-36 bg-red-300 overflow-y-scroll"
                        @scroll.passive="
                            (e) => console.log(e.target.firstChild.innerHTML)
                        "
                    >
                        <div class="w-full h-80">Scroll Me</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Key Modifiers  -->
        <div
            class="bg-white/70 backdrop-blur-sm w-full p-5 mb-5 rounded-md shadow-sm"
        >
            <h1 class="text-xl font-medium">Key Modifiers</h1>
            <div>
                <div>
                    <h2>example</h2>
                    <input
                        @keyup.enter="eventGan('Yay, you pressed enter!')"
                        class="outline-1"
                        type="text"
                        placeholder="Enter Me"
                    />
                    <hr />
                </div>
            </div>

            <div>
                <div>
                    <h2>Key Aliases</h2>

                    <input
                        type="text"
                        class="outline-1"
                        placeholder="Enter Page Down"
                        @keyup.page-down="eventGan('Yay, you enter page down!')"
                    />

                    <hr />
                </div>
            </div>

            <div>
                <div>
                    <h2>System Modifier Keys</h2>

                    <input
                        type="text"
                        class="outline-1"
                        placeholder="alt + enter"
                        @keyup.alt.enter="
                            eventGan('Yay, you enter (alt + enter)!')
                        "
                    />

                    <div
                        class="bg-black text-white w-fit px-1 mt-2 cursor-pointer"
                        @click.ctrl="eventGan('Yay, you ctrl + enter me!')"
                    >
                        ctrl + click me!
                    </div>
                    <hr />
                </div>
            </div>

            <div>
                <div>
                    <h2>.exact Modifier</h2>
                    <div class="flex gap-2">
                        <button
                            class="bg-black hover:bg-black/70 px-2 py-1 text-white rounded-sm"
                            @click.ctrl="eventGan('@click.ctrl')"
                        >
                            ctrl + click
                        </button>
                        <button
                            class="bg-black hover:bg-black/70 px-2 py-1 text-white rounded-sm"
                            @click.ctrl.exact="eventGan('@click.ctrl.exact')"
                        >
                            ctrl + click (exact)
                        </button>
                        <button
                            class="bg-black hover:bg-black/70 px-2 py-1 text-white rounded-sm"
                            @click="eventGan('@click')"
                        >
                            click (Normal)
                        </button>
                        <button
                            class="bg-black hover:bg-black/70 px-2 py-1 text-white rounded-sm"
                            @click.exact="eventGan('@click.exact')"
                        >
                            click (exact)
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h2>Mouse Button Modifiers</h2>
                    <div class="flex gap-2">
                        <button
                            class="bg-white text-black hover:bg-black hover:text-white px-2 py-1 rounded-sm"
                            @click.left="eventGan('@click.left')"
                        >
                            left click
                        </button>
                        <button
                            class="bg-white text-black hover:bg-black hover:text-white px-2 py-1 rounded-sm"
                            @click.middle="eventGan('@click.middle')"
                        >
                            middle click
                        </button>
                        <button
                            class="bg-white text-black hover:bg-black hover:text-white px-2 py-1 rounded-sm"
                            @click.right="eventGan('@click.right')"
                        >
                            right click
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

// Inline Handlers ==================================
const count = ref(0);
// Method Handlers ==================================
const greet = ref("Vue Js");
function clickMe(param) {
    alert(`Hello from ${greet.value}!`);
    if (param) {
        alert(param.target.tagName);
    }
}
// Calling Methods in Inline Handlers ===============
function greaterGreet(param) {
    alert(param);
}
// Calling Methods in Inline Handlers ===============
function warn(param, event) {
    if (event) {
        event.preventDefault();
        console.log(event);
    }
    alert(param);
}
// Event Modifiers ==================================
function doThis(param) {
    alert("Do This " + param);
}

function submitMe() {
    alert("Submitted But Prevented");
}

function doThat(param) {
    alert("Do That " + param);
}

function doIt() {
    alert("Do It");
}
// Key Modifiers =====================================
function eventGan(param) {
    alert(param);
}
</script>
