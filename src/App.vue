<template>
  <main class="container mx-auto relative p-16 scroll-my-12">
    <section class="w-full space-y-8 max-w-5xl mx-auto">

      <TopMenu />

      <header class="flex items-center justify-between">
        <AboutMe />
      </header>

      <section class="flex min-h-0 flex-col gap-y-3" v-if="!$route.meta.hideLayout">
        <h2 class="text-xl font-bold">About</h2>
        <div class="font-mono text-sm text-justify">
          I am a Hydroinformatics Specialist with a strong background in web development, Python programming, and
          data-driven decision-making for water resource management.
          I am passionate about bridging the gap between hydrology, data science, and web technologies to develop
          next-generation hydroinformatics solutions.
        </div>
        <Divider />
      </section>

      <router-view></router-view>
    </section>
  </main>
</template>

<script setup>
import TopMenu from './components/TopMenu.vue'
import AboutMe from './components/AboutMe.vue'
import Divider from 'primevue/divider';

</script>

<style scoped></style>
