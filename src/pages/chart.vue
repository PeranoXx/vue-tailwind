<template>
    <div class="flex">
        <div class="grow">
            <div class="flex justify-between w-full py-2 px-4 shadow-md relative">
                <div class="flex items-center gap-3">
                    <h3 class="md:text-xl  font-bold text-slate-800">Taxes and Persons</h3>
                    <iconButtonVue color="bg-sky-500" src="save.svg" >
                        <span class="mx-2 text-sm ">Save</span>
                    </iconButtonVue>
                    <iconButtonVue src="plus.svg">
                        <span class="mx-2 text-sm hidden lg:block">Add Connection</span>
                    </iconButtonVue>
                    <iconButtonVue src="bell.svg">
                        <span class="mx-2 text-sm hidden lg:block text-rose-500">Alert</span>
                    </iconButtonVue>
                </div>
                <div class="flex items-center gap-3">
                    <iconButtonVue src="rotate-ccw.svg">
                        <span class="mx-2 text-sm hidden lg:block">Reset</span>
                    </iconButtonVue>
                    <iconButtonVue src="download.svg">
                        <span class="mx-2 text-sm hidden lg:block">Export</span>
                    </iconButtonVue>
                </div>
            </div>

            <!-- chart area -->
            <div class="bg-slate-100/75 chart-area relative">
                <div class="flex justify-between w-full py-2 px-3 absolute">
                    <div class="flex items-center gap-3">
                        <div class="bg-white h-10 rounded-md shadow-md">
                            <button
                                class="items-center py-2 pl-2 pr-1 font-medium tracking-wide capitalize transition-colors duration-200 transform ">
                                <img src="src/assets/icons/arrow-left.svg" alt="">
                            </button>
                            <button
                                class="items-center py-2 pl-1 pr-2 font-medium tracking-wide capitalize transition-colors duration-200 transform rounded-md ">
                                <img src="src/assets/icons/arrow-right.svg" alt="">
                            </button>
                        </div>
                        <div class="bg-white h-10 px-2 rounded-md shadow-md flex items-center">
                            <button
                                class="items-center bg-slate-100 py-1 px-1 rounded-md font-medium tracking-wide capitalize transition-colors duration-200 transform ">
                                <img src="src/assets/icons/plus (1).svg" alt="">
                            </button>
                            <span class="text-sm px-2">Taxes and Persons imported</span>
                            <button
                                class="items-center py-1 px-1 rounded-md font-medium tracking-wide capitalize transition-colors duration-200 transform ">
                                <img src="src/assets/icons/Frame 239.svg" alt="">
                            </button>
                            <button
                                class="items-center bg-slate-100 ml-2 py-1 px-1 rounded-md font-medium tracking-wide capitalize transition-colors duration-200 transform ">
                                <img src="src/assets/icons/plus (2).svg" alt="">
                            </button>
                            <span class="text-sm px-2">Connection added</span>
                            <button
                                class="items-center py-1 px-1 rounded-md font-medium tracking-wide capitalize transition-colors duration-200 transform ">
                                <img src="src/assets/icons/Frame 239.svg" alt="">
                            </button>
                            <button
                                class="items-center bg-slate-100 ml-2 py-1 px-1 rounded-md font-medium tracking-wide capitalize transition-colors duration-200 transform ">
                                <img src="src/assets/icons/minus.svg" alt="">
                            </button>
                            <span class="text-sm px-2">General Things unselected</span>
                        </div>

                    </div>
                    <div class="flex items-center gap-3">
                        <iconButtonVue color="bg-white" src="Group 16.svg">
                        </iconButtonVue>
                    </div>
                </div>
                <div class="absolute bottom-2 right-3">
                    <div class="flex flex-col items-center gap-1">
                        <div class="bg-white rounded-md shadow-md flex flex-col">
                            <button
                                class="items-center py-2 px-2 font-medium tracking-wide capitalize transition-colors duration-200 transform ">
                                <img src="src/assets/icons/plus (3).svg" alt="">
                            </button>
                            <button
                                class="items-center py-2 px-2 font-medium tracking-wide capitalize transition-colors duration-200 transform rounded-md ">
                                <img src="src/assets/icons/minus (1).svg" alt="">
                            </button>
                        </div>
                        <div class="bg-white rounded-md shadow-md">
                            <button
                                class="items-center py-2 px-2 font-medium tracking-wide capitalize transition-colors duration-200 transform ">
                                <img src="src/assets/icons/crosshair.svg" alt="">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- sidebar component -->
        <sidebarVue>
            <div>
                <form>
                    <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <img src="src/assets/icons/search.svg" alt="">
                        </div>
                        <input type="search" id="default-search"
                            class="block p-2 rounded-md pl-10 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-sky-500 focus:border-sky-500 focus-visible:outline-none "
                            placeholder="Search Datasets..." required>
                    </div>
                </form>

                <div class="py-6">
                    <neutralCheckboxVue label="NAME" id="name"
                        :checked="checkboxArray.every(x => x.checked == true) ? true : false"
                        :indeterminate="!indeterminate" @checkedStatus="mainCheckedStatus">
                        <label for="name" class="text-slate-500"><span class="text-sm">NAME</span></label>
                    </neutralCheckboxVue>
                    <div class="py-2">
                        <div v-for="(item, index) in checkboxArray" class="flex py-2 justify-between ">
                            <checkboxVue label="NAME" :id="item.label" :checked="item.checked"
                                @checkedStatus="childCheckedStatus(index, $event)">
                                <label :for="item.label" class="text-slate-900"><span class="text-sm">{{ item.label
                                }}</span></label>
                            </checkboxVue>
                            <div>
                                <sidebarDropdownVue :id="item.id" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full bg-white -top-16 history absolute hidden">
                test
            </div>
        </sidebarVue>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

import sidebarDropdownVue from '../components/dropdowns/sidebar-dropdown.vue'
import iconButtonVue from '../components/buttons/icon-button.vue';
import sidebarVue from '../components/sidebar.vue';
import checkboxVue from '../components/forms/checkbox.vue';
import neutralCheckboxVue from '../components/forms/neutral-checkbox.vue';
import checkboxArray from '../constant/checkbox-array'


const indeterminate = ref()
onMounted(async () => {
    console.log('charts');
    indeterminate.value = neutralCheckbox()
});

const mainCheckedStatus = (val: any) => {
    console.log(val);
    val ? checkboxArray.value.map(x => x.checked = true) : checkboxArray.value.map(x => x.checked = false)
}

const childCheckedStatus = (index: any, val: any) => {
    checkboxArray.value[index].checked = val
    indeterminate.value = neutralCheckbox()
}

const neutralCheckbox = () => {
    return checkboxArray.value.every(x => x.checked == checkboxArray.value[0].checked)
}

</script>

<style>
.chart-area {
    height: calc(100vh - 105px);
}

.history {
    min-height: calc(100vh - 100px);
}
</style>
