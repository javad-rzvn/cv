<template>
    <ul class="flex list-none flex-wrap gap-1 p-0">
        <li v-for="(skill, index) in skills">
            <div class="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold
            font-mono transition-colors bg-neutral-500 text-white hover:bg-neutral-300 hover:text-black">
                {{ skill }}
            </div>
        </li>
    </ul>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    skills: Array
})
</script>