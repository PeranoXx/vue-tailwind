<template>
  <div class="bg-slate-100/75 workspace px-4">

    <!-- main -->
    <div class="flex justify-between py-6">
      <h1 class="font-bold text-3xl tracking-wide">Workspace</h1>
      <div class="flex gap-2">
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <img src="src/assets/icons/search.svg" alt="">
          </div>
          <input type="search" id="default-search"
            class="block p-2 rounded-md pl-10 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-sky-500 focus:border-sky-500 focus-visible:outline-none"
            placeholder="Search Datasets..." required>
        </div>
        <iconButtonVue v-if="role == 'admin'" src="refresh-cw.svg">
        </iconButtonVue>
        <iconButtonVue src="bell.svg">
          <span class="mx-2 text-sm hidden lg:block text-rose-500">Alert</span>
        </iconButtonVue>
        <iconButtonVue color="bg-sky-500" src="plus (4).svg">
          <span class="mx-2 text-sm ">Create Workspace</span>
        </iconButtonVue>
      </div>
    </div>
    <div v-if="role == 'user'">
      <!-- alerts -->
      <div>
        <div class="py-3">
          <div class="flex justify-between">
            <span>Alerts (5)</span>
            <div>
              <dropdownMenuVue :data="alertDropdownList" @selectValue=selectValue />
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 my-5">
            <div v-for="(index) in 5" class="shadow-sm">
              <alertCardVue label="Alert Name" dataset="Dataset 3" date="07/08/2022" :id="index" />
            </div>
          </div>
        </div>
      </div>

      <!-- datasets -->
      <div>
        <div class="py-3">
          <div class="flex justify-between">
            <span>Category Alpha (10)</span>
            <div>
              <dropdownMenuVue :data="datasetDropdownList" @selectValue=selectValue />
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 my-5">
            <div v-for="(index) in 10" class="shadow-sm">
              <router-link :to="{ name: 'datasets', params: { workspace: 'Workspace Name 1' } }">
                <datasetCardVue label="Workspace Name 1" dataset="Dataset 3" date="07/08/2022" :id="index" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div v-if="role == 'admin'">
      <div>
        <div class="py-3">
          <div class="flex justify-between">
            <span>Today 29/08/2022 (4)</span>
            <div>
              <dropdownMenuVue :data="datasetDropdownList" @selectValue=selectValue />
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 my-5">
            <div v-for="(index) in 4" class="shadow-sm">
              <router-link :to="{ name: 'admin-datasets', params: { workspace: 'Workspace Name 1' } }">
                <datasetCardAdminVue label="Workspace Name 1" dataset="3" users="16" date="07/08/2022" :id="index" desc="Workspace Dataset Name Workspace Dataset Name" />
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="py-3">
          <div class="flex justify-between">
            <span>07/08/2022 (10)</span>
            <div>
              <dropdownMenuVue :data="datasetDropdownList" @selectValue=selectValue />
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 my-5">
            <div v-for="(index) in 10" class="shadow-sm">
              <router-link :to="{ name: 'admin-datasets', params: { workspace: 'Workspace Name 1' } }">
                <datasetCardAdminVue label="Workspace Name 1" dataset="3" users="16" date="07/08/2022" :id="index" desc="Workspace Dataset Name Workspace Dataset Name" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import iconButtonVue from '../components/buttons/icon-button.vue'
import alertCardVue from '../components/cards/alert-card.vue';
import datasetCardVue from '../components/cards/dataset-card.vue';
import datasetCardAdminVue from '../components/cards/dataset-card-admin.vue';
import dropdownMenuVue from '../components/dropdowns/dropdown-menu.vue'


const role = ref('admin')
const selectValue = (value: any) => {
  console.log(value);
}

const alertDropdownList = ref([
  {
    value: 'name',
    label: 'Name'
  },
  {
    value: 'date',
    label: 'Date'
  },
]);

const datasetDropdownList = ref([
  {
    value: 'creation-date',
    label: 'Creation Date'
  },
  {
    value: 'name',
    label: 'Name'
  },
]);
</script>

<style scoped>
.workspace {
  min-height: calc(100vh - 50px);
}
</style>
