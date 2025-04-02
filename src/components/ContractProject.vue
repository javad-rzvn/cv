<template>
    <article class="h-full">
        <div class="relative flex h-full flex-col overflow-hidden border rounded-lg p-3 border-gray-300">
            <div class="flex flex-col space-x-1.5">
                <div class="space-y-1">
                    <div class="flex justify-between">
                        <div class="flex items-center">
                            <div v-if="url" class="inline-block mr-2">
                                <a :href="url" class=" whitespace-nowrap"><i
                                        class="pi pi-external-link" style="font-size: 10px"></i></a>
                            </div>
                            <h3 class="font-semibold inline-flex items-center text-sm">
                                <a v-if="url" :href="url" class=" whitespace-nowrap">{{ title }}</a>
                                <a v-else>{{ title }}</a>

                                <span v-if="status === 'Online'" class="ml-2 size-1.5 rounded-full bg-green-500"
                                    v-tooltip="status"></span>
                                <span v-else-if="status === 'Offline'" class="ml-2 size-1.5 rounded-full bg-red-500"
                                    v-tooltip="status"></span>
                                <span v-else class="ml-2 size-1.5 rounded-full bg-gray-500" v-tooltip="status"></span>
                            </h3>
                        </div>
                        <div class="text-sm text-gray-500 font-mono">{{ date ? date : '' }}</div>
                    </div>
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
    date: String,
    url: String,
    description: String,
    tags: Array,
    status: String,
})
</script>