<template>
    <div>
        <header class="shadiw-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
                <ul class="flex gap-4">
                    <li> <NuxtLink to="/">Home</NuxtLink> </li>
                    <li> <NuxtLink to="/about">About</NuxtLink> </li>
                    <li> <NuxtLink to="/products" class="btn p-2 bg-green-600 text-white rounded-md">Products</NuxtLink> </li>
                </ul>
            </nav>
        </header>

        <div class="container mx-auto p-4 flex justify-between border-t-2">
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
 .router-link-exact-active{
    color: #12b488;
 }
</style>