<template>
    <div class="bg-white border-l-4 border-slate-500/80 rounded-tr-lg rounded-br-lg">
        <div class="flex justify-between px-4 py-6">
            <div class="flex items-center">
                <img src="@/assets/icons/database 1.svg" alt="">

                <div class="px-4">
                    <p class="font-bold text-slate-800">{{  label  }}</p>
                    <div class="flex gap-3">
                        <span class="flex gap-1 items-center">
                            <div class="bg-slate-200 rounded-md p-1">
                                <img src="@/assets/icons/database.svg" alt="">
                            </div>
                            <span class="text-sm">{{  dataset  }}</span>
                        </span>
                        <span class="flex gap-1 items-center">
                            <div class="bg-slate-200 rounded-md p-1">
                                <img src="@/assets/icons/Frame 19908.svg" alt="">
                            </div>
                            <span class="text-sm">{{  users  }}</span>
                        </span>
                    </div>
                    <span class="w-3/4">
                        <p class="inline text-sm text-slate-500">{{  desc  }}</p>
                    </span>
                </div>
            </div>

        </div>
        <div class="border-t px-4 py-2.5">
            <div class="flex justify-between">
                <span>
                    <p class="inline text-sm text-slate-500 pr-4">ID {{  id  }}</p>
                    <p class="inline text-sm text-slate-500 pr-4">{{  date  }}</p>
                </span>
                <div class="text-slate-500">
                    <alertDropdownVue :id="id" />
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import alertDropdownVue from '../dropdowns/alert-dropdown.vue'
defineProps({
    id: [String, Number],
    label: String,
    dataset: String,
    date: [String, Date],
    desc: String,
    users: [String, Number]
})
</script>