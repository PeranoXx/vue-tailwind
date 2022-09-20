<template>
    <button
        class="flex items-center px-2 py-2 font-medium tracking-wide capitalize transition-colors duration-200 transform rounded-md hover:shadow-lg transition"
        :class="[color ? `${color} text-white ` : 'border']">
        <img :src="image(src)" alt="">   
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
defineProps({
    color: String,
    src: String,
});
const image = (src:any) =>{
return new URL(`../../assets/icons/${src}`, import.meta.url).href
}

</script>

<style>
</style>