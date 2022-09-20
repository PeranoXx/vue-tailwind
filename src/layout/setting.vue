<template>
    <a-layout>
        <a-layout-header :style="{ position: 'sticky', top: 0, zIndex: 1, width: '100%', background: '#fff', padding: 0 }" class="fixed-header">
            <div class="dis">
                <router-link :to="{ name: 'dashboard' }">
                    <a-button type="text">
                        <template #icon>
                            <ArrowLeftOutlined />
                        </template>
                        Back
                    </a-button>
                </router-link>
                <h4 :style="{fontWeight: 100}">User Settings</h4>
                <Header />
            </div>
        </a-layout-header>
        <a-layout-content :style="{ padding: '24px', minHeight: '88vh' }">
            <router-view />
        </a-layout-content>
    </a-layout>
</template>
<script setup lang="ts">
import { ArrowLeftOutlined } from "@ant-design/icons-vue";
import Header from "../components/Headers/header.vue";

</script>
<style scoped>
.trigger {
    padding-left: 20px;
    padding-right: 5px;
    font-size: 16px;
}

.dis {
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
}
</style>
