// v-if on template
<template v-if="isTemplateOk == true">
    <div class="p-5">
        <!-- v-if and v-else -->
        <div class="bg-gray-100 p-5 rounded-md shadow-md m-5">
            <h1 class="bg-purple-600 font-medium w-fit pl-1 text-white text-xl">
                v-if and v-else | conditon is {{ awsome }}
                <button
                    @click="awsome = !awsome"
                    class="bg-black px-2 text-white font-bold hover:bg-gray-800"
                >
                    Click Me!
                </button>
            </h1>
            <div v-if="awsome">Vue is Awsome 🤗</div>
            <div v-else>Vue is Stupid 🤓</div>
        </div>

        <!-- v-else-if -->
        <div class="bg-gray-100 p-5 rounded-md shadow-md m-5">
            <h1 class="bg-purple-600 font-medium w-fit pl-1 text-white text-xl">
                v-else-if | conditon is {{ myMood }}
                <button @click="cycleMood" class="px-2 bg-yellow-400 font-bold">
                    Click Me!
                </button>
            </h1>
            <div v-if="myMood == 'happy'">
                <h1>Yay Happy</h1>
                <img
                    src="https://clipart-library.com/image_gallery2/Yao-Ming-Face-PNG.png"
                    class="w-24 h-24"
                />
            </div>
            <div v-else-if="myMood == 'angry'">
                <h1>Grr Angry</h1>
                <img
                    src="https://www.happierhuman.com/wp-content/uploads/2022/06/anger-meme-littlenivi-come-here-you.jpg"
                    class="w-24 h-24"
                />
            </div>
            <div v-else-if="myMood == 'sad'">
                <h1>Hisk Sad</h1>
                <img
                    src="https://e7.pngegg.com/pngimages/410/549/png-clipart-pepe-the-frog-feeling-meme-sad-food-leaf.png"
                    class="w-24 h-24"
                />
            </div>
        </div>

        <!-- v-show -->
        <div class="bg-gray-100 p-5 rounded-md shadow-md m-5">
            <h1 class="bg-purple-600 font-medium w-fit pl-1 text-white text-xl">
                v-show | conditon is {{ isShowSpeed }}
                <button
                    @click="isShowSpeed = !isShowSpeed"
                    class="px-2 bg-pink-400 font-bold"
                >
                    Click Me!
                </button>
            </h1>
            <div v-show="isShowSpeed">
                <iframe
                    width="420"
                    height="315"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                >
                </iframe>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

// v-if v-else==============================
const awsome = ref(false);
const myMood = ref("happy");
// =========================================

// v-if-else================================
// function cycleMood() {
//     const mood = ["angry", "sad", "happy"];
//     let abc = myMood.value;
//     let random = () => {
//         return mood[Math.floor(Math.random() * mood.length)];
//     };

//     while(myMood.value == abc){
//         abc = random()
//     }
//     return myMood.value = abc;
// }

function cycleMood() {
    const mood = ["angry", "sad", "happy"];
    let curretMood = mood.indexOf(myMood.value);
    if (curretMood == mood.length - 1) {
        curretMood = -1;
    }
    return (myMood.value = mood[curretMood + 1]);
}
// =========================================
// v-show ==================================
const isShowSpeed = ref(true);
</script>
