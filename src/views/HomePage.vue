<template>
  <div class="space-y-8">
    <section class="flex min-h-0 flex-col gap-y-3">
      <h2 class="text-xl font-bold">Work Experience</h2>
      <div class="space-y-4">
        <WorkExperience project="تست" position="مدیر هیدروانفورماتیک" date="1398" />
        <WorkExperience project="تست" position="مدیر هیدروانفورماتیک" date="1398" />
      </div>
    </section>

    <section class="flex min-h-0 flex-col gap-y-3">
      <h2 class="text-xl font-bold">Eduation</h2>
      <div class="space-y-4">
        <Education title="تست" description="مدیر هیدروانفورماتیک" date="1398" />
      </div>
    </section>

    <section class="flex min-h-0 flex-col gap-y-3">
      <h2 class="text-xl font-bold">Skills</h2>
      <div class="space-y-4">
        <Skill :skills="['PowerBI', 'Python']" />
      </div>
    </section>
  </div>

  <section class="flex min-h-0 flex-col gap-y-3">
    <h2 class="text-xl font-bold">Side Projects</h2>
    <div class="grid grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-2">
      <div v-for="project in projects" :key="project.id">
        <SideProject :title="project.title" :status="project.status" :link="`/projects/${project.id}`" description="Test desc"
          :tags="['node.js', 'FastAPI']" />
      </div>
    </div>
  </section>
</template>

<script setup>
import WorkExperience from '../components/WorkExperience.vue'
import Education from '../components/Education.vue'
import Skill from '../components/Skill.vue'
import SideProject from '../components/SideProject.vue'

import projects from '../projects.json';
</script>