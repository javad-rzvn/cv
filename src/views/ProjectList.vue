<template>
    <section class="flex min-h-0 flex-col gap-y-3">
        <h1 class="text-2xl font-bold">Projects</h1>
        <Divider align="center" type="dotted">
            <b>Featured</b>
        </Divider>
        <div class="grid grid-cols-1 gap-3 lg:grid-cols-2 md:grid-cols-1">
            <div v-for="project in featuredProjects" :key="project.id">
                <SideProject :title="project.title" :status="project.status" :link="`/projects/${project.id}`"
                    :description="project.description" :tags="project.tags" />
            </div>
        </div>
        <Divider />
        <div class="grid grid-cols-1 gap-3">
            <div v-for="project in otherProjects" :key="project.id">
                <ContractProject :title="project.title" :status="project.status" :description="project.description"
                    :tags="project.tags" :date="project.date" :url="project.url" />
            </div>
        </div>
    </section>
</template>

<script setup>
import SideProject from '../components/SideProject.vue'
import ContractProject from '../components/ContractProject.vue'
import projects from '../projects.json';
import Divider from 'primevue/divider';

const featuredProjects = projects.filter(project => project.isFeatured === true);
const otherProjects = projects.filter(project => project.isFeatured === false);
</script>