<template>
    <div class="">
        <div class="form-group-check">
            <input type="checkbox" :id="id" :disabled="disabled" :checked="checked" v-model="checked" @change="checkedStatus(checked)" />
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts" setup>
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
    
})

const checkedStatus = (checked:any)=>{
    emit("checkedStatus", checked);
}
</script>