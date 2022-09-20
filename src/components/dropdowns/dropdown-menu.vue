<template>
    <div class="text-right">
        <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton class="flex items-center">
                    {{selectedValue.label}}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 pl-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </MenuButton>
            </div>

            <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <MenuItems
                    class="absolute z-10 right-0 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="px-1 py-1" >
                        <MenuItem v-slot="{ active }" v-for="(item, index) in data" :key="index">
                        <button 
                            :class="[active ? 'bg-sky-500 text-white' : 'text-slate-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm',]" @click="selectValue(item)">
                            <span class="pl-2">{{item?.label}}</span>
                        </button>
                        </MenuItem>
                    </div>
                    <!-- <div class="px-1 py-1">
                        <MenuItem v-slot="{ active }">
                        <button 
                            :class="[active ? 'bg-sky-500 text-white' : 'text-slate-900', 'group flex w-full items-center rounded-md px-2 py-2 text-sm',]" @click="selectValue('Name')">
                            <span class="pl-2">Name</span>
                        </button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <button :class="[
                            active ? 'bg-sky-500 text-white' : 'text-slate-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]" @click="selectValue('Date')">
                            <span class="pl-2">Date</span>
                        </button>
                        </MenuItem>
                    </div> -->
                </MenuItems>
            </transition>
        </Menu>
    </div>
</template>

<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ref } from 'vue';

const props:any = defineProps({
    id: [String, Number],
    data: [Object, Array]
})
const emit = defineEmits(["selectValue"]);

const selectedValue = ref(props.data[0])

const selectValue = (value:any)=>{
    emit("selectValue", value);
    selectedValue.value = value
}

</script>