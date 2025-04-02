<template>
    <section class="flex min-h-0 flex-col gap-y-3">
        <h1 class="text-2xl font-bold">Technical Notes</h1>
        <div v-if="loading" class="grid grid-cols-1 gap-3 lg:grid-cols-2 md:grid-cols-2">
            <div class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900">
                <div class="flex justify-between">
                    <Skeleton width="10rem" class="mb-2"></Skeleton>
                    <Skeleton width="3rem" class="mb-2"></Skeleton>
                </div>
                <Skeleton width="100%" height="150px"></Skeleton>
            </div>
        </div>
        <div v-else-if="posts.length === 0" class="grid grid-cols-1 gap-3 lg:grid-cols-2 md:grid-cols-2">
            <Message severity="warn">No notes to display !</Message>
        </div>
        <div v-else class="grid grid-cols-1 gap-3 lg:grid-cols-2 md:grid-cols-2">
            <TechnicalNote v-for="post in posts" :key="post.id" :title="post.title.rendered" :date="post.modified"
                :link="`/notes/${post.id}`" :description="formatExcerpt(post.excerpt.rendered, 35)" />
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TechnicalNote from '../components/TechnicalNote.vue'
import Skeleton from 'primevue/skeleton';
import Message from 'primevue/message';

const posts = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
    try {
        const response = await fetch('https://waterdirectory.ir/wp-json/wp/v2/posts?categories=328');
        if (!response.ok) throw new Error('Could not fetch notes!');
        const data = await response.json();
        posts.value = data;
    } catch (err) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
});

// Function to format the excerpt
function formatExcerpt(excerpt, wordLimit) {
    // Remove HTML tags
    const plainText = excerpt.replace(/<[^>]*>/g, ' ');

    // Split the text into words and take the first 'wordLimit' words
    const words = plainText.split(/\s+/).slice(0, wordLimit).join(' ');

    // Add ellipsis if there are more words
    return words + (words.length < plainText.length ? '...' : '');
}
</script>