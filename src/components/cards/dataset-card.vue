<template>
    <div class="bg-white border-l-4 border-slate-500/80">
        <div class="flex justify-between px-4 py-6">
            <div class="flex items-center">
                <img src="@/assets/icons/database 1.svg" alt="">

                <div class="px-4">
                    <p class="font-bold text-slate-800">{{ label }}</p>
                    <span>
                        <p class="inline text-sm text-slate-500 pr-4">ID {{id}}</p>
                        <p class="inline text-sm text-slate-500 pr-4">{{ dataset }}</p>
                        <p class="inline text-sm text-slate-500 pr-4">{{ date }}</p>
                    </span>
                </div>
            </div>
            <div class="text-slate-500">
                <alertDropdownVue :id="id" />
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
    date: [String, Date]
})
</script>