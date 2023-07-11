<template>
    <div>
       
        <h2>about</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum molestiae sit, dolorem nam commodi magnam,
            corporis eius modi maxime, excepturi unde. Molestiae sequi aliquid itaque cumque qui temporibus? Officia,
            explicabo.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum molestiae sit, dolorem nam commodi magnam,
            corporis eius modi maxime, excepturi unde. Molestiae sequi aliquid itaque cumque qui temporibus? Officia,
            explicabo.</p>
            <div>{{ data }}</div>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/GBP')

</script>

<style  scoped>
 h2{
    margin-bottom: 20px;
    font-size: 36px;
 }
 p{
    margin: 20px 0;
 }
</style>