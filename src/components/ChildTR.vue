<template>
    <div>HI I AM THE CHILD FOR TEMPLATE REFS</div>
</template>

<script setup>
import { ref } from "vue";

const a = 1;
const b = ref(2);

defineExpose({
    a, b    
})

</script>
