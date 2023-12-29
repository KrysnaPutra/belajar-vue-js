<template>
    <div class="bg-gray-800 min-h-screen w-full p-5 text-white">
        <!-- Defining a Component and Using a Component -->
        <div
            class="bg-slate-700 p-5 mb-5 rounded-md border-[1px] border-gray-400 shadow-md"
        >
            <h1 class="text-2xl font-bold">
                Defining a Component and Using a Component
            </h1>
            <p style="text-2xl font-bold">
                This buttons is from external component
            </p>
            <div class="flex gap-5">
                <awsome-button></awsome-button>
                <AwsomeButton />
                <AwsomeButton></AwsomeButton>
            </div>
        </div>

        <!-- Passing Props -->
        <div
            class="bg-slate-700 p-5 mb-5 rounded-md border-[1px] border-gray-400 shadow-md"
        >
            <h1 class="text-2xl font-bold">Passing Props</h1>
            <p>Passing propertiers to a component</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <CardPost
                    v-for="(data, index) in postDatas"
                    :title="data.title"
                    :image="data.image"
                    :content="data.content"
                    :key="index"
                />
            </div>
        </div>

        <!-- Listening to Events -->
        <div
            class="bg-slate-700 p-5 mb-5 rounded-md border-[1px] border-gray-400 shadow-md"
        >
            <h1 class="text-2xl font-bold">Listening to Events</h1>
            <p>Passing properties that listening to events on component</p>
            <div>
                <CoolCard
                    title="Minecraft"
                    content="Minecraft is a game made up of blocks, creatures, and community. Blocks can be used to reshape the world or build fantastical creations. Creatures can be battled or befriended, depending on your playstyle. Experience epic adventures solo or with friends, theres no wrong way to play. Unless you re digging straight down."
                    image="https://i1.sndcdn.com/artworks-z56Hm7bDyDvMj5vk-4JThlw-t500x500.jpg"
                    @enlarge-button="PlusPlus"
                    @shrink-button="MinMin"
                    :resize="{ fontSize: plusSize + 'px' }"
                ></CoolCard>
            </div>
        </div>

        <!-- Content Distribution with Slots -->
        <div
            class="bg-slate-700 p-5 mb-5 rounded-md border-[1px] border-gray-400 shadow-md"
        >
            <h1 class="text-2xl font-bold">Content Distribution with Slots</h1>
            <p>
                Just like with HTML elements, it's often useful to be able to
                pass content to a component
            </p>
            <div>
                <AlertCard>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia, odit dicta, perspiciatis libero expedita natus
                    fugiat nesciunt distinctio dolore mollitia aliquam culpa.
                </AlertCard>
            </div>
        </div>

        <!-- Dynamic Components -->
        <div
            class="bg-slate-700 p-5 mb-5 rounded-md border-[1px] border-gray-400 shadow-md"
        >
            <h1 class="text-2xl font-bold">Dynamic Components</h1>
            <p>
                Sometimes, it's useful to dynamically switch between components,
                like in a tabbed interface
            </p>
            <div class="pt-2">
                <button
                    v-for="(_, tab) in tabs"
                    :key="tab"
                    :class="[
                        'rounded-t-md border-[1px] border-b-0 border-gray-400 bg-gray-200 py-1 px-3 text-sm text-black',
                        { 'bg-gray-400': tab == currentTab },
                    ]"
                    @click="currentTab = tab"
                >
                    {{ tab }}
                </button>
                <component :is="tabs[currentTab]"></component>
                <p>{{ tabs[0] }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import AwsomeButton from "../components/componets_basics/AwsomeButton.vue";
import CardPost from "../components/componets_basics/CardPost.vue";
import CoolCard from "../components/componets_basics/CoolCard.vue";
import AlertCard from "../components/componets_basics/AlertCard.vue";

import Home from "../components/componets_basics/tab/HomeTab.vue";
import About from "../components/componets_basics/tab/AboutTab.vue";
import Sigma from "../components/componets_basics/tab/SigmaTab.vue";

const postDatas = ref([
    {
        title: "I Lived My Life For You",
        image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357",
        content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos laboriosam, veritatis id eos cumque aliquid.",
    },
    {
        title: "Lumba-Lumba Warnet",
        image: "https://steamuserimages-a.akamaihd.net/ugc/2108304211011912102/C84A7BE738B70EDDA75FA7F3412E91C26C632CAB/",
        content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos laboriosam, veritatis id eos cumque aliquid est vitae aut delectus voluptas eum voluptatum. Lorem ipsum dolor sit amet.",
    },
    {
        title: "Nice Guy in Paris",
        image: "https://www.w3schools.com/css/paris.jpg",
        content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos laboriosam, veritatis id eos cumque aliquid est vitae aut delectus voluptas eum voluptatum optio unde ea labore quis reprehenderit minima maxime voluptates laborum fuga.",
    },
]);

const plusSize = ref(16);

function PlusPlus() {
    if (plusSize.value < 24) {
        plusSize.value += 1;
    }
}
function MinMin() {
    if (plusSize.value > 8) {
        plusSize.value -= 1;
    }
}

const currentTab = ref('Home');
const tabs = {Home, About, Sigma}
</script>
