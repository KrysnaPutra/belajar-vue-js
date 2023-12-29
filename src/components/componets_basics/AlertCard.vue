<template>
    <div
        class="w-full bg-yellow-400/10 border-[1px] border-yellow-400 p-3 rounded-md"
    >
        <div class="flex items-center gap-1">
            <div class="w-7 h-7">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-full h-full fill-yellow-400"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 2L1 21h22M12 6l7.53 13H4.47M11 10v4h2v-4m-2 6v2h2v-2"
                    />
                </svg>
            </div>
            <h1 class="text-yellow-400 text-xl font-medium">False Warning!</h1>
        </div>
        <p class="text-gray-200 pt-2">
            <slot></slot>
        </p>
    </div>
</template>

<script setup></script>
