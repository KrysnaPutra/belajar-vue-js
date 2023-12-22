<template>
    <div>
        <h1>Form Test</h1>
        <form id="app" @submit="onSubmitt">
            <div class="flex gap-4">
                <input
                    type="text"
                    name="text1"
                    id="text1"
                    class="border-2"
                    placeholder="input text 1"
                />
            </div>
            <button
                type="submit"
                class="bg-gray-500 hover:bg-gray-300 hover:text-black text-white rounded-md duration-200 px-2 py-1"
            >
                submit
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {};
    },
    methods: {
        onSubmitt(e) {
            let text1 = document.getElementById("text1");
            if (text1.value != "") {
                alert(text1.value);
            } else {
                e.preventDefault();
            }
        },
    },
};
</script>
