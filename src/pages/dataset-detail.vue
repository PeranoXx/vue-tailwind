<template>
    <div class="bg-slate-100/75 dataset">
        <div class="bg-white flex items-center shadow-md">
            <div class="px-4 py-1.5">
                <button class="px-1 py-1.5 bg-white rounded-md" @click="router.back()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>
            <div>
                <h1 class="text-xl font-bold tracking-wide">Dataset</h1>
            </div>
        </div>


        <!-- main -->
        <div class="flex justify-between py-6 px-4">
            <h1 class="font-bold text-3xl tracking-wide">{{ route.params.dataset }}</h1>
            <div class="flex gap-4">
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <img src="@/assets/icons/search.svg" alt="">
                    </div>
                    <input type="text" id="default-search" v-model="search"
                        class="block p-2 rounded-md pl-10 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-sky-500 focus:border-sky-500 focus-visible:outline-none"
                        placeholder="Search Datasets...">
                </div>
                <div class="flex gap-2">
                    <iconButtonVue src="download.svg" class="px-3">
                        <span class="pl-2 text-slate-800 text-sm">Export</span>
                    </iconButtonVue>
                    <iconButtonVue color="bg-sky-500" src="upload-cloud.svg" class="px-3">
                        <span class="pl-2 text-white text-sm">Upload New</span>
                    </iconButtonVue>
                </div>
                <!-- <div>
                    <select v-model="limit" name="select" id="limit"
                        class="block p-2 rounded-md pl-2 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus-visible:outline-none">
                        <option value="8">8</option>
                        <option value="15">15</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div> -->
            </div>
        </div>

        <!-- table  -->
        <div class="overflow-x-auto">
            <div class="px-4 min-w-[1400px]">
                <dataTableVue :column="columns" :table-data="datasetData" :current-page="currentPage"
                    @handleCheck="handleCheck" :total-records="total" :limit="limit" :checked-id="checkedId"
                    @handleChange="handleChange">
                    <template #checkbox="{ row: data }">
                        <div class="text-center">
                            <checkboxVue :id="data.id" :checked="checkedId.includes(data.id)"
                                @checkedStatus="CheckedStatus(data.id, $event)">
                                <label :for="data.id"></label>
                            </checkboxVue>
                        </div>
                    </template>
                    <template #view="{ row: data }">
                        <div class="cursor-pointer text-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>

                        </div>
                    </template>
                    <template #identification-number="{ row: data }">
                        <span class="tracking-wide text-slate-800 font-semibold text-sm"> {{ data.number }}</span>
                    </template>
                    <template #name="{ row: data }">
                        <span class="tracking-wide text-slate-500 text-sm"> {{ data.name }}</span>
                    </template>
                    <template #surname="{ row: data }">
                        <span class="tracking-wide text-slate-700 text-sm"> {{ data.surname }}</span>
                    </template>
                    <template #subject="{ row: data }">
                        <span class="tracking-wide text-slate-700 text-sm"> {{ data.subject }}</span>
                    </template>
                </dataTableVue>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import iconButtonVue from '@/components/buttons/icon-button.vue';
import checkboxVue from '@/components/forms/checkbox.vue'
import dataTableVue from '@/components/tables/datatable2.vue'
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const search = ref('')
const limit = ref(15)
const currentPage = ref(1)
const checkedId: any = ref([])
const total = ref(15)
const datasetData: any = ref([])

for (let i = 0; i < 15; i++) {
    datasetData.value.push({
        id: i + 1,
        number: 'A12345678B',
        name: 'Jack',
        surname: 'Johnson',
        subject: '2L12345678B'
    })
}
const handleChange = (sort: any, page: any) => {
    console.log(sort);
    console.log(page);
}
const columns = computed(() => {
    return [
        {
            title: "",
            slot: 'checkbox',
            dataIndex: "",
            width: 'w-[5%]',
            checkbox: true
        },
        {
            title: "",
            slot: 'view',
            dataIndex: "",
            width: 'w-[5%]',
        },
        {
            title: "Identification Number",
            slot: 'identification-number',
            dataIndex: "identification-number",
            width: 'w-[25%]',
            sorter: true,
        },
        {
            title: "Name",
            slot: 'name',
            dataIndex: "name",
            width: 'w-[20%]',
            sorter: true,
        },
        {
            title: "Surname ",
            slot: 'surname',
            dataIndex: "surname",
            width: 'w-[20%]',
            sorter: true,
        },
        {
            title: "Subject Identification No (NIPT)",
            slot: 'subject',
            dataIndex: "subject",
            width: 'w-[25%]',
            sorter: true,
        },
    ];
});

const handleCheck = (val: any) => {
    val ? datasetData.value.forEach((element: any) => checkedId.value.push(element.id)) : checkedId.value = []
}

const CheckedStatus = (id: any, value: any) => {
    value ? checkedId.value.push(id) : checkedId.value = checkedId.value.filter((x: any) => x != id)
}

</script>

<style scoped>
.dataset {
    min-height: calc(100vh - 50px);
}
</style>
