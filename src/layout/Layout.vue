<template>
    <div>
        <div class="flex justify-between bg-slate-200">
            <div class="flex items-center">
                <div class="px-4 py-1.5 border-r border-slate-300">
                    <button class="px-1 py-1.5 bg-white shadow-md rounded-md">
                        <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.252 10C14.1401 6.54955 17.2723 4 21 4C25.4183 4 29 7.58172 29 12C29 16.4183 25.4183 20 21 20C17.2723 20 14.1401 17.4505 13.252 14"
                                stroke="#009CF7" />
                            <path
                                d="M11.4722 8C10.3736 6.7725 8.777 6 7 6C3.68629 6 1 8.68629 1 12C1 15.3137 3.68629 18 7 18C8.777 18 10.3736 17.2275 11.4722 16"
                                stroke="#FD397A" />
                            <path
                                d="M18.3333 12C18.3333 13.4728 19.5272 14.6667 21 14.6667C22.4728 14.6667 23.6667 13.4728 23.6667 12C23.6667 10.5272 22.4728 9.33333 21 9.33333C19.5272 9.33333 18.3333 10.5272 18.3333 12ZM4.33333 12C4.33333 13.4728 5.52724 14.6667 7 14.6667C8.47276 14.6667 9.66667 13.4728 9.66667 12C9.66667 10.5272 8.47276 9.33333 7 9.33333C5.52724 9.33333 4.33333 10.5272 4.33333 12ZM21 11.5H7V12.5H21V11.5Z"
                                fill="#19233C" />
                        </svg>

                    </button>
                </div>
                <div class="flex border-r border-slate-300">
                    <router-link :to="{ name: 'workspace' }">
                        <button
                            class="flex items-center h-12 px-2 py-2 text-center bg-transparent dark:text-white whitespace-nowrap cursor-base focus:outline-none"
                            :class="splitRoute[1] == 'workspace' ? 'active' : ''">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                            </svg>
                            <span class="ml-2 text-sm sm:text-base">
                                Workspace
                            </span>
                        </button>
                    </router-link>
                    <router-link :to="{ name: 'charts' }">
                        <button
                            class="flex items-center h-12 px-2 py-2 text-center bg-transparent dark:text-white whitespace-nowrap cursor-base focus:outline-none"
                            :class="routeName == 'charts' ? 'active' : ''">
                            <span class="mr-2 text-sm sm:text-base">
                                Taxes and Persons
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m-15 0l15 15" />
                            </svg>
                        </button>
                    </router-link>
                </div>
                <div class="px-4">
                    <button class="px-2 py-2 bg-slate-300/50 rounded-md" @click="addTabButton">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m9-9H3" />
                        </svg>

                    </button>
                </div>
            </div>
            <div class="px-[16px] py-1.5 border-l border-slate-300 flex items-center cursor-pointer" @click="signOutButton">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.75 18.75H6.75C6.35218 18.75 5.97064 18.592 5.68934 18.3107C5.40804 18.0294 5.25 17.6478 5.25 17.25V6.75C5.25 6.35218 5.40804 5.97064 5.68934 5.68934C5.97064 5.40804 6.35218 5.25 6.75 5.25H9.75"
                        stroke="#19233C" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 15.75L18.75 12L15 8.25" stroke="#19233C" stroke-width="1.25" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M18.75 12H9.75" stroke="#19233C" stroke-width="1.25" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
        </div>
        <router-view />
    </div>

</template>
<script setup lang="ts">
import { checkRoute } from "../constant/check-route";

const { routeName, splitRoute } = checkRoute();

const addTabButton = () => {
    console.log('add tab');

}

const signOutButton = () => {
    console.log('sign out');

}
</script>
<style>
.active {
    background-color: #fff;
    border-top: 2px solid #38bdf8;
}
</style>
