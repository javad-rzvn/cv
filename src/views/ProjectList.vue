<template>
    <div>
        <h1>Portfolio</h1>
        <ul>
            <li v-for="project in projects" :key="project.id">
                <router-link :to="`/projects/${project.id}`">{{ project.title }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import projects from '../projects.json';
// import { ref } from 'vue';

// const projects = ref([
//     { id: 1, name: 'Project 1' },
//     { id: 2, name: 'Project 2' },
// ]);
</script>