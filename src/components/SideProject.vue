<template>
    <article class="h-full">
        <div class="relative flex h-full flex-col overflow-hidden border rounded-lg p-3 border-gray-300">
            <div class="flex flex-col space-x-1.5">
                <div class="space-y-1">
                    <div v-if="status === 'Online'" class="inline-block mr-2 size-1.5 rounded-full bg-green-500"
                        v-tooltip.top="status"></div>
                    <div v-else-if="status === 'Offline'" class="inline-block mr-2 size-1.5 rounded-full bg-red-500"
                        v-tooltip.top="status"></div>
                    <div v-else class="inline-block mr-2 size-1.5 rounded-full bg-gray-500" v-tooltip.top="status">
                    </div>
                    <h3 class="inline font-semibold text-base">
                        <router-link class="hover:underline text-sm"
                            :to="{ name: 'ProjectDetail', params: { id: id } }">
                            {{ title }}
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
            <router-link :to="{ name: 'ProjectDetail', params: { id: id } }" class="block bottom-0 w-full mt-5 font-mono text-xs text-center bg-gray-900 border
                rounded-border text-white py-1 transition-colors hover:border-1 hover:bg-transparent
                hover:text-black">
                Click To View Details
            </router-link>
        </div>
    </article>
</template>

<script setup>
const props = defineProps({
    id: String,
    title: String,
    description: String,
    tags: Array,
    status: String,
})
</script>