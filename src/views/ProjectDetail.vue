<template>
    <Divider align="left" type="solid">
        <b>Project Details</b>
    </Divider>

    <section class="flex min-h-0 flex-col gap-y-3">
        <h1 class="text-2xl font-bold flex justify-between">
            {{ project.title }}
            <Badge v-if="project.status === 'Online'" severity="success">{{ project.status }}</Badge>
            <Badge v-else-if="project.status === 'Offline'" severity="danger">{{ project.status }}</Badge>
            <Badge v-else severity="secondary">{{ project.status }}</Badge>
        </h1>

        <div class="flex text-sm font-mono mt-auto">
            <ul class="flex list-none flex-wrap gap-1 p-0 mt-2">
                <li v-for="(tag, index) in project.tags" :key="index">
                    <div class="inline-flex items-center rounded-md font-semibold font-mono transition-colors px-1 py-1
                            bg-neutral-100 hover:bg-neutral-50 text-[10px]">
                        {{ tag }}
                    </div>
                </li>
            </ul>
        </div>

        <div class="space-y-4">
            <div v-if="projectContent !== ''">
                <div v-html="projectContent"></div>
            </div>
            <div v-else>
                <p>Loading...</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue';
import projects from '../projects.json';
import { marked } from 'marked';
import Divider from 'primevue/divider';
import Badge from 'primevue/badge';

const route = useRoute();
const project = ref('');
const projectContent = ref('');

onMounted(async () => {
    const projectId = route.params.id;
    project.value = projects.find(p => p.id === projectId) || null;

    if (project.value) {

        try {
            const response = await fetch(`/projects/${projectId}.md`);
            // console.log(`Fetching: /projects/${projectId}.md`, response.status);

            if (!response.ok) throw new Error('Markdown file not found');

            const markdownText = await response.text();

            projectContent.value = marked(markdownText); // Convert markdown to HTML
        } catch (error) {
            projectContent.value = '<p style="color: red;">Error loading project content.</p>';
            console.error(error);
        }
    } else {
        projectContent.value = '<p style="color: red;">Project not found.</p>';
    };
});

// Computed property to access the title
const pageTitle = computed(() => {
    return project.value ? `Mohammad Javad Rezvanpour - Project: ${project.value.title}` : 'Loading...';
});
useHead({
    title: pageTitle,
    //   meta: [{ name: 'description', content: computed(() => `Description for ${title.value}`) }]
})
</script>