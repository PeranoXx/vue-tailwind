<template>
    <div class="">
        <div class="form-group-check">
            <input type="checkbox" :id="id" :disabled="disabled" :checked="checked" v-model="check" :indeterminate="indeterminate" @change="checkedStatus"/>
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const check = ref(false)

const emit = defineEmits(["checkedStatus"]);
defineProps({
    label: String,
    id: String,
    disabled: {
        default: false,
        type: Boolean
    },
    checked: {
        default: false,
        type: Boolean
    },
    indeterminate: {
        default: false,
        type: Boolean
    }
})

const checkedStatus = ()=>{
    emit("checkedStatus", check.value);
}
</script>