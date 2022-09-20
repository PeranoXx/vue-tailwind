<template>
    <div class="flex py-4 w-full">
        <div v-for="(item, index) in column" :key="index" :class="[item.width ? item.width : 'w-full']">
            <div v-if="item.checkbox" class="text-center">
                <neutralCheckboxVue label="NAME" id="name" :checked="checkedId?.length == tableData?.length" :indeterminate="checkedId?.length < tableData?.length && checkedId?.length != 0" @checkedStatus="handleCheck">
                    <label for="name" class="text-slate-500"></label>
                </neutralCheckboxVue>
            </div>
            <div v-else class="text-sm flex gap-2">
                <span class="text-slate-500 uppercase" :class="item.sorter ? 'cursor-pointer' : ''"
                    @click="sort(index, item.dataIndex)">{{ item.title }}</span>
                <div v-if="item.sorter" @click="sort(index, item.dataIndex)">
                    <button class="text-slate-500" v-if="dir == 'asc' && field == item.dataIndex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-3 h-3">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                        </svg>
                    </button>
                    <button class="text-slate-500" v-if="dir == 'desc' && field == item.dataIndex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-3 h-3">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <template v-if="tableData?.length">
        <template v-for="(item, i) in tableData" :key="i">
            <tr class="flex items-center py-6 mb-3 w-full bg-white rounded-md shadow-sm">
                <template v-for="(cell, i) in column" :key="i">
                    <td :class="[cell.width ? cell.width : 'w-full']">
                        <slot :name="cell.slot" :row="item">
                            <!-- {{ item }} -->
                        </slot>
                    </td>
                </template>
            </tr>
        </template>
    </template>

    <div class="text-slate-500 text-sm flex justify-between items-center py-3">
        <p>Shown <span class="text-slate-900"> {{ limit > totalRecords ? totalRecords : limit }} </span> of <span
                class="text-slate-900">{{ totalRecords }}</span> Records</p>
        <div class="flex items-center">
            <p class="inline">Page <input type="text" id="default-search" v-model="page" disabled
                    class="inline px-2 py-1.5 rounded-md w-10 text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-sky-500 focus:sky-blue-500 focus-visible:outline-none">
                of {{ totalPage }}
            </p>
            <div class="h-10 pl-2">
                <button
                    class="items-center py-2 pl-2 pr-1 font-medium tracking-wide capitalize transition-colors duration-200 transform ">
                    <img src="@/assets/icons/chevron-left.svg" alt="" @click="prev">
                </button>
                <button
                    class="items-center py-2 pl-1 pr-2 font-medium tracking-wide capitalize transition-colors duration-200 transform rounded-md ">
                    <img src="@/assets/icons/chevron-right.svg" alt="" @click="next">
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import checkboxVue from '@/components/forms/checkbox.vue'
import neutralCheckboxVue from '@/components/forms/neutral-checkbox.vue';
import { computed } from '@vue/reactivity';
import { ref, reactive } from 'vue';

const props = defineProps({
    column: [Array, Object],
    tableData: [Array, Object],
    currentPage: {
        type: Number,
        default: 0
    },
    totalRecords: {
        type: Number,
        default: 0
    },
    limit: {
        type: Number,
        default: 0
    },
    checkedId: [Array,Object]
})
const emit = defineEmits(['handleChange', 'handleCheck'])
const dir = ref('')
const field = ref('')
const page = ref(props.currentPage)
const totalPage = ref(Math.ceil(props.totalRecords / props.limit))
const tableData = ref(props.tableData)
// const checkedId = ref(props.checkedId)
const sorter = reactive({
    field: '',
    dir: ''
})

const currentPage = reactive({
    page: props.currentPage
})

const sort = (index: any, name: any) => {
    dir.value == '' ? dir.value = 'asc' : (dir.value == 'asc' ? dir.value = 'desc' : dir.value = 'asc')
    field.value = name
    sorter.field = name,
        sorter.dir = dir.value
    emit("handleChange", sorter, currentPage);
}

const next = () => {
    page.value < totalPage.value ? page.value = page.value + 1 : null;
    currentPage.page = page.value
    emit("handleChange", sorter, currentPage);
}

const prev = () => {
    page.value > 1 ? page.value = page.value - 1 : null;
    currentPage.page = page.value
    emit("handleChange", sorter, currentPage);
}

const handleCheck = (val: any) => {
    emit("handleCheck", val);
}
</script>