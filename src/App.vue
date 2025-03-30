<script setup>
import Button from 'primevue/button';
import WorkExperience from './components/WorkExperience.vue'
import Education from './components/Education.vue'
import Skill from './components/Skill.vue'
import SideProject from './components/SideProject.vue'
import TopMenu from './components/TopMenu.vue'
</script>

<template>
  <main class="container mx-auto relative p-16 scroll-my-12">
    <section class="w-full space-y-8 max-w-2xl mx-auto">

      <TopMenu :model="items">
        <template #item="{ item, props, hasSubmenu }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon" />
              <span>{{ item.label }}</span>
            </a>
          </router-link>
          <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
          </a>
        </template>
      </TopMenu>

      <header class="flex items-center justify-between">
        <div class="flex-1 space-y-1.5">
          <h1 class="text-2xl font-extrabold">Mohammad Javad Rezvanpoor</h1>
          <p class="max-w-md text-sm font-light font-mono">Programmer | Data Analyst</p>
          <p class="max-w-md text-xs font-light font-mono">Iran, Mashhad</p>
          <div class="flex gap-x-1 pt-1 font-mono text-sm">
            <a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors
            border border-gray-300 size-8 hover:bg-gray-50" href="#">
              <i class="pi pi-globe"></i>
            </a>
            <a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors
            border border-gray-300 size-8 hover:bg-gray-50" href="#">
              <i class="pi pi-envelope"></i>
            </a>
            <a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors
            border border-gray-300 size-8 hover:bg-gray-50" href="#">
              <i class="pi pi-phone"></i>
            </a>
            <a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors
            border border-gray-300 size-8 hover:bg-gray-50" href="#">
              <i class="pi pi-telegram"></i>
            </a>
            <a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors
            border border-gray-300 size-8 hover:bg-gray-50" href="#">
              <i class="pi pi-github"></i>
            </a>
          </div>
        </div>
        <span class="rounded-xl relative flex shrink-0 size-28 overflow-hidden">
          <img class="w-full h-full aspect-square" src="./assets/avatar.jpg" />
        </span>
      </header>

      <div class="space-y-8">
        <section class="flex min-h-0 flex-col gap-y-3">
          <h2 class="text-xl font-bold">About</h2>
          <div class="font-mono text-sm">
            Frontend-focused Full Stack Engineer specializing in high-performance React applications, scalable Node.js
            services, and real-time collaboration systems. Experienced in technical architecture design and remote team
            leadership.
          </div>
        </section>

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
          <SideProject title="Test" link="#test" description="Test desc" :tags="['node.js', 'FastAPI']" />
          <SideProject title="Test" link="#test" description="Test desc" :tags="['node.js', 'FastAPI']" />
          <SideProject title="Test" link="#test" description="Test desc" :tags="['node.js', 'FastAPI']" />
        </div>
      </section>

    </section>

  </main>

</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          url: 'https://google.com',

        },
        {
          label: 'Blog',
          icon: 'pi pi-fw pi-pen-to-square',
        },
      ]
    }
  }
}
</script>

<style scoped></style>
