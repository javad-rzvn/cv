<template>
    <article class="h-full">
        <div class="flex h-full flex-col overflow-hidden border rounded-lg p-3 border-gray-300">
            <div class="flex flex-col space-x-1.5">
                <div class="space-y-1">
                    <h3 class="font-semibold text-base">
                        <router-link class="inline-flex items-center gap-1 hover:underline" :to="link">
                            {{ title }}

                            <span v-if="status === 'Online'" class="ml-2 size-1.5 rounded-full bg-green-500" v-tooltip="status"></span>
                            <span v-else-if="status === 'Offline'" class="ml-2 size-1.5 rounded-full bg-red-500" v-tooltip="status"></span>
                            <span v-else class="ml-2 size-1.5 rounded-full bg-gray-500" v-tooltip="status"></span>
                        </router-link>
                    </h3>
                    <p class="font-mono text-xs">
                        {{ description }}
                    </p>
                </div>
            </div>
            <div class="flex text-sm font-mono mt-auto">
                <ul class="flex list-none flex-wrap gap-1 p-0 mt-2">
                    <li v-for="(tag, index) in tags">
                        <div class="inline-flex items-center rounded-md font-semibold font-mono transition-colors px-1 py-1
                            bg-neutral-100 hover:bg-neutral-50 text-[10px]">
                            {{ tag }}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </article>
</template>

<script setup>
defineProps({
    title: String,
    link: String,
    description: String,
    tags: Array,
    status: String,
})
</script>