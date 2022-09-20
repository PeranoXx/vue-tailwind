<template>
    <div :class="['border-l py-2 ', mobileView == '24rem' ? 'px-4' : 'px-2', animation]" :style="{ width: mobileView }" >
        <div class="justify-between items-center pb-4" :class="mobileView == '24rem' ? 'flex' : 'block'">
            <div class="items-center" :class="mobileView == '24rem' ? 'flex' : 'block'">
                <button v-if="mobileView == '24rem'" @click="slideIn"
                    class="flex items-center pr-2 py-2 font-medium tracking-wide capitalize transition-colors duration-200 transform rounded-md">
                    <img src="src/assets/icons/skip-forward.svg" alt="">
                </button>
                <button v-else @click="slideOut"
                    class="rotate-180 flex items-center px-2 py-2 font-medium tracking-wide capitalize transition-colors duration-200 transform rounded-md">
                    <img src="src/assets/icons/skip-forward.svg" alt="">
                </button>
                <h3 v-if="mobileView == '24rem'" class="text-xl font-bold text-slate-800">Datasets</h3>
            </div>
            <div :class="mobileView == '24rem' ? 'pt-0' : 'pt-4'">
                <iconButtonVue color="bg-sky-500" src="upload-cloud.svg">
                    <span v-if="mobileView == '24rem'" class="mx-2 text-sm">Import Dataset</span>
                </iconButtonVue>
            </div>
        </div>
        <div v-if="mobileView == '24rem'" class="relative">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onDeactivated, onMounted, ref } from 'vue';
import iconButtonVue from '../components/buttons/icon-button.vue'; // color = button color | src = button icon 
const width = ref()
const mobileView = ref('24rem')
const animation = ref()

onMounted(async () => {
    // width.value < 1160 ? (mobileView.value = "[15px]") : (mobileView.value = "[24rem]");
    mobileView.value = '24rem'
    window.addEventListener("resize", onResize);
});

onDeactivated(() => {
    window.removeEventListener("resize", onResize);
});

const onResize = () => {
    width.value = window.innerWidth;
    width.value < 1160 ? (mobileView.value = "57px") : (mobileView.value = "24rem");
};
const slideIn = () => {
    animation.value = 'animation-in'
    mobileView.value = '57px'
}

const slideOut = () => {
    animation.value = 'animation-out'
    setTimeout(() => {
        mobileView.value = '24rem'
    }, 100);
}
</script>

<style>
.animation-in {
    animation: 0.2s ease-out;
    animation-name: slidein;
}

@keyframes slidein {
    from {
        width: 24rem;
    }

    to {
        width: 57px;
    }
}

.animation-out {
    animation: 0.2s ease-out;
    animation-name: slideout;
}

@keyframes slideout {
    from {
        width: 57px;
    }

    to {
        width: 24rem;
    }
}
</style>