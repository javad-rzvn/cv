<template>
    <article class="h-full">
        <div class="flex h-full flex-col overflow-hidden border rounded-lg p-3 border-gray-300">
            <div class="flex flex-col space-x-1.5">
                <div class="space-y-1">
                    <div class="flex justify-between">
                        <h3 class="font-semibold text-base space-y-2">
                            <router-link class="inline-flex items-center gap-1 hover:underline" :to="link">
                                {{ title }}
                            </router-link>
                        </h3>
                        <Badge severity="secondary" size="small">{{ formatDate(date) }}</Badge>
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
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge';

defineProps({
    title: String,
    link: String,
    description: String,
    tags: Array,
    date: String,
})

function formatDate(dateString) {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleString('en-US', {
        // weekday: 'long', // e.g. "Tuesday"
        year: 'numeric',
        month: 'long',   // e.g. "April"
        day: 'numeric',  // e.g. "1"
        // hour: '2-digit',
        // minute: '2-digit',
        // second: '2-digit'
    });
}
</script>