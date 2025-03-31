<template>
  <main class="container mx-auto relative p-16 scroll-my-12">
    <section class="w-full space-y-8 max-w-2xl mx-auto">

      <TopMenu />

      <header class="flex items-center justify-between">
        <AboutMe />
      </header>

      <section class="flex min-h-0 flex-col gap-y-3" v-if="!$route.meta.hideLayout">
        <h2 class="text-xl font-bold">About</h2>
        <div class="font-mono text-sm">
          Frontend-focused Full Stack Engineer specializing in high-performance React applications, scalable Node.js
          services, and real-time collaboration systems. Experienced in technical architecture design and remote team
          leadership.
        </div>
      </section>

      <router-view></router-view>
    </section>
  </main>
</template>

<script setup>
import TopMenu from './components/TopMenu.vue'
import AboutMe from './components/AboutMe.vue'
</script>

<style scoped></style>
