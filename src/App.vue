<template>
  <main class="container mx-auto relative p-16 scroll-my-12 xs:p-4">
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

      <Dialog v-model:visible="isModalVisible" modal pt:root:class="!border-0 !bg-transparent w-lg"
        @update:visible="handleDialogVisibility">
        <template #container="{ closeCallback }">
          <div class="listbox-container">
            <Listbox v-model="selectedListItem" filter :options="listItems" optionLabel="name" optionGroupLabel="name"
              optionGroupChildren="items" class="w-lg" filterPlaceholder="Type a command or search"
              @change="handleSelection" ref="dialogRef">
              <template #optiongroup="slotProps">
                <div class="flex items-center text-gray-400 text-xs">
                  <div>{{ slotProps.option.name }}</div>
                </div>
              </template>
            </Listbox>
          </div>
        </template>
      </Dialog>

      <div class="fixed bottom-0 w-full left-0 mx-auto bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50
        text-center text-sm py-1 z-999 text-gray-500 m-0 sm:hidden xs:hidden">
        <span>Press <Tag severity="secondary" value="Ctrl + J" style="font-size: 11px;background-color: oklch(86.9% 0.022 252.894);"></Tag> to open the command
          menu</span>
      </div>

      <router-view></router-view>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import TopMenu from './components/TopMenu.vue'
import AboutMe from './components/AboutMe.vue'
import Divider from 'primevue/divider';
import Dialog from 'primevue/dialog';
import Listbox from 'primevue/listbox';
import Tag from 'primevue/tag';
import { onClickOutside } from '@vueuse/core';

const isModalVisible = ref(false);

const handleKeydown = (event) => {
  if (event.ctrlKey && event.key.toLowerCase() === 'j') {
    event.preventDefault(); // Prevent browser default action
    isModalVisible.value = !isModalVisible.value;
  }
};

const dialogRef = ref(null);
onClickOutside(dialogRef, () => {
  isModalVisible.value = false;
});

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});


const selectedListItem = ref();
const listItems = ref([
  // {
  //   name: 'Action',
  //   items: [
  //     {
  //       name: 'Print',
  //       action: 'print'
  //     }
  //   ]
  // },
  {
    name: 'Links',
    items: [
      {
        name: 'Personal Blog',
        url: 'https://waterdirectory.ir/',
      },
      {
        name: 'Telegram',
        url: 'https://javad_rzvn.t.me/',
      },
      {
        name: 'Github',
        url: 'https://github.com/javad-rzvn/',
      },
      {
        name: 'X',
        url: 'https://x.com/javad_rzvn/',
      }
    ]
  }
]);
const handleSelection = () => {
  if (selectedListItem.value) {
    if (selectedListItem.value.action === 'print') {
      window.print(); // Trigger the browser's print dialog
    } else if (selectedListItem.value.url) {
      window.open(selectedListItem.value.url, '_blank'); // Open external link
    }
  }
};
</script>

<style scoped></style>
