<template>
    <div class="bg-slate-100/75 dataset">
        <div class="bg-white flex items-center shadow-md">
            <div class="px-4 py-1.5">
                <router-link :to="{ name: 'workspace' }">
                    <button class="px-1 py-1.5 bg-white rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                </router-link>
            </div>
            <div>
                <h1 class="text-xl font-bold tracking-wide">WorkSpace Name</h1>
            </div>
        </div>


        <!-- main -->
        <div class="flex justify-between py-6 px-4">
            <h1 class="font-bold text-3xl tracking-wide">Datasets</h1>
            <div class="flex gap-2">
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <img src="@/assets/icons/search.svg" alt="">
                    </div>
                    <input type="text" id="default-search" v-model="search"
                        class="block p-2 rounded-md pl-10 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-sky-500 focus:border-sky-500 focus-visible:outline-none"
                        placeholder="Search Datasets...">
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
                    @handleCheck="handleCheck" :total-records="total" :limit="limit" :checked-id="checkedId" @handleChange="handleChange">
                    <template #checkbox="{ row: data }">
                        <div class="text-center">
                            <checkboxVue :id="data.id" :checked="checkedId.includes(data.id)"
                                @checkedStatus="CheckedStatus(data.id, $event)">
                                <label :for="data.id"></label>
                            </checkboxVue>
                        </div>
                    </template>
                    <template #view="{ row: data }">
                        <router-link :to="{name: 'datasets-list', params:{workspace: route.params.workspace, dataset: data.title}}" class="cursor-pointer">
                           <img src="@/assets/icons/Frame 19910.svg" alt="">
                        </router-link>
                    </template>
                    <template #header-information="{ row: data }">
                        <span class="tracking-wide text-slate-800 font-semibold text-sm"> {{ data.title }}</span>
                    </template>
                    <template #number-of-records="{ row: data }">
                        <span class="tracking-wide text-sky-500 text-sm"> {{ data.records }}</span>
                    </template>
                    <template #created="{ row: data }">
                        <span class="tracking-wide text-slate-700 text-sm"> {{ data.created }}</span>
                    </template>
                    <template #created_by="{ row: data }">
                        <span class="tracking-wide text-slate-700 text-sm"> {{ data.created_by }}</span>
                    </template>
                    <template #updated="{ row: data }">
                        <span class="tracking-wide text-slate-700 text-sm"> {{ data.updated }}</span>
                    </template>
                    <template #updated_by="{ row: data }">
                        <span class="tracking-wide text-slate-700 text-sm"> {{ data.updated_by }}</span>
                    </template>
                </dataTableVue>
            </div>
        </div>
        
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import checkboxVue from '@/components/forms/checkbox.vue'
import dataTableVue from '@/components/tables/datatable.vue'
import datasetData from '@/constant/dataset-data'
import { useRoute } from 'vue-router';

const route = useRoute()
const search = ref('')
const limit = ref(8)
const currentPage = ref(1)
const checkedId: any = ref([])

const total = ref(20)
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
            title: "Header Information",
            slot: 'header-information',
            dataIndex: "header-information",
            width: 'w-4/12',
            sorter: true,
        },
        {
            title: "Number Of Records",
            slot: 'number-of-records',
            dataIndex: "number-of-records",
            width: 'w-2/12',
            sorter: true,
        },
        {
            title: "Created ",
            slot: 'created',
            dataIndex: "created",
            width: 'w-1/12',
            sorter: true,
        },
        {
            title: "Created By",
            slot: 'created_by',
            dataIndex: "created_by",
            width: 'w-1/12',
            // sorter: true,
        },
        {
            title: "Updated",
            slot: 'updated',
            dataIndex: "updated",
            width: 'w-1/12',
            sorter: true,
        },
        {
            title: "Updated By",
            slot: 'updated_by',
            dataIndex: "updated_by",
            width: 'w-1/12',
            // sorter: true,
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
