<template>
    <div class="flex-1 space-y-1.5">
        <h1 class="text-2xl font-extrabold" v-if="isHome">Mohammad Javad Rezvanpour</h1>
        <h2 class="text-xl font-extrabold" v-else>Mohammad Javad Rezvanpour</h2>
        <p class="max-w-md text-sm font-light font-mono">Hydroinformatics Specialist <br> Data Scientist (GIS &
            Hydrology Focus)</p>
        <p class="max-w-md text-xs font-light font-mono">Iran, Mashhad</p>
        <div class="flex gap-x-1 pt-1 font-mono text-sm">
            <a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors
            border border-gray-300 size-8 hover:bg-gray-50" href="https://waterdirectory.ir">
                <i class="pi pi-globe"></i>
            </a>
            <a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors
            border border-gray-300 size-8 hover:bg-gray-50" href="mailto:rezvanpour@duck.com">
                <i class="pi pi-envelope"></i>
            </a>
            <a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors
            border border-gray-300 size-8 hover:bg-gray-50" href="tel:+9809377527122">
                <i class="pi pi-phone"></i>
            </a>
            <a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors
            border border-gray-300 size-8 hover:bg-gray-50" href="https://javad_rzvn.t.me/">
                <i class="pi pi-telegram"></i>
            </a>
            <a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors
            border border-gray-300 size-8 hover:bg-gray-50" href="https://github.com/javad-rzvn">
                <i class="pi pi-github"></i>
            </a>
            <a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors
            border border-gray-300 size-8 hover:bg-gray-50" href="https://x.com/javad_rzvn">
                <i class="pi pi-twitter"></i>
            </a>
            <a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors
            border border-gray-300 size-8 hover:bg-gray-50" href="https://scholar.google.com/citations?user=UetO8_cAAAAJ">
                <IconGoogleScholar />
            </a>
        </div>
    </div>
    <span class="rounded-xl relative flex shrink-0 size-28 overflow-hidden">
        <img class="w-full h-full aspect-square" src="../assets/avatar.jpg" />
    </span>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import IconGoogleScholar from './icons/IconGoogleScholar.vue';

const route = useRoute();
const isHome = computed(() => route.path === '/'); // Check if it's the home page
</script>