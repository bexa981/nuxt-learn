<template>
    <div class="mt-7 max-w-sm mx-auto text-center card rounded-md bg-white shadow-md h-full">
    <p class="mt-7 text-7x1 font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6x1">Ooops .</p>
    <p class="mt-7 ">{{ error.message }}</p>
    </div>
</template>

<script setup>
defineProps(['error'])
</script>

<style scoped>

</style>