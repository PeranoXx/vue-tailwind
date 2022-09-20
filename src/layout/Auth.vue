<template>
    <div class="main-bg">
        <a-row type="flex" justify="end" align="middle" class="container">
            <a-col :span="14" :xs="{ span: 24 }" :md="{ span: 14 }" class="auth-intro">
                <div class="text-center">
                    <h1 class="text-white auth-heading1">
                        GET PAID FOR <br />
                        EVERY RIGHT STEP
                    </h1>
                    <p class="text-white auth-heading2">
                        We are here to empower every <br />
                        Recruitment Agency
                    </p>
                </div>
            </a-col>
            <a-col :span="10" :xs="{ span: 24 }" :md="{ span: 10 }">
                <div class="text-center pb-20">
                    <a-image :width="280" src="/images/hr-logo-light-resize.png" />
                </div>
                <router-view />
            </a-col>
        </a-row>

        <!-- <footer class="public_footer"></footer> -->
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted } from "vue";
const app: any = getCurrentInstance();
const $instance = app.appContext.config.globalProperties.$recaptchaInstance;

onMounted(async() => {
    if ($instance) {
        await $instance.value.showBadge();
    }
});
</script>

<style>
.auth-header {
    color: #151429;
    font-weight: bold;
    font-size: 30px !important;
    line-height: 1.35;
}
.main-bg {
    background-image: url("/images/bg-image2.png");
    height: 100%;
    min-height: 100vh;
    background-size: cover;
}

.public_footer:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    background-image: url("/images/big_bottom_layer.450ad009.svg");
    height: 218px;
    width: 392px;
    background-size: contain;
    background-repeat: no-repeat;
}

@media only screen and (max-width: 1024px) {
    .public_footer:before {
        display: none;
    }
}
</style>
