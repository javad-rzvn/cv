<template>
    <Menubar :model="items">
        <template #item="{ item, props, hasSubmenu }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a v-ripple :href="href" v-bind="props.action" @click="navigate" :class="item.class" class="text-sm">
                    <span :class="item.icon" />
                    <span v-if="item.label">{{ item.label }}</span>
                </a>
            </router-link>
            <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                <span :class="item.icon" />
                <span>{{ item.label }}</span>
                <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
            </a>
        </template>
    </Menubar>
</template>

<script setup>
import Menubar from 'primevue/menubar';

import { ref } from 'vue';

const items = ref([
    {
        icon: 'pi pi-fw pi-home',
        route: '/',

    },
    {
        label: 'Projects',
        route: '/projects',
        icon: 'pi pi-fw pi-briefcase',
    },
    {
        label: 'Technical Notes',
        icon: 'pi pi-fw pi-pen-to-square',
        route: '/notes'
    },
    {
        label: 'Academic',
        icon: 'pi pi-fw pi-graduation-cap',
        // route: '/research-contributions',
        items: [
            {
            label: 'Research & Contributions',
            icon: 'pi pi-fw pi-search',
            route: '/research-contributions'
        },
        {
            label: 'Conferences, Webinars & Events',
            icon: 'pi pi-fw pi-comments',
            route: '/conferences-webinars'
        },
        {
            label: 'Courses Taught',
            icon: 'pi pi-fw pi-users',
            route: '/courses'
        }
    ]
    },
    {
        label: 'Awards & Honors',
        icon: 'pi pi-fw pi-trophy',
        class: 'awards',
        route: '/awards'
    },
    {
        label: 'NexusAnalysis',
        icon: 'pi pi-fw pi-objects-column',
        link: 'https://nexusanalysis.org/'
    },
]);
</script>