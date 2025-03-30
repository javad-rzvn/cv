<template>
    <article>
        <div class="py-1">
            <div class="flex flex-col space-y-1.5">
                <div class="flex items-center justify-between gap-x-2 text-base">
                    <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold">
                        {{ title }}
                    </h3>
                    <div class="text-sm text-gray-500">{{ date }}</div>
                </div>
            </div>
            <div class="font-mono text-sm">
                {{ description }}
            </div>
        </div>
    </article>
</template>

<script setup>
defineProps(['title', 'date', 'description'])
</script>