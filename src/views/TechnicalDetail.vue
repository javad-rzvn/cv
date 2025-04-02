<template>
    <Divider align="left" type="solid">
        <b>Technical Note Details</b>
    </Divider>

    <div v-if="loading">
        <div class="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900">
            <div class="flex justify-between">
                <Skeleton width="10rem" class="mb-2"></Skeleton>
                <Skeleton width="3rem" class="mb-2"></Skeleton>
            </div>
            <Skeleton width="100%" height="150px"></Skeleton>
        </div>
    </div>
    <div v-else>
        <section class="flex min-h-0 flex-col gap-y-3">
            <div class="flex justify-between">
                <h1 class="text-2xl font-bold ">
                    {{ post.title.rendered }}
                </h1>
                <Badge severity="secondary" size="large">{{ formatDate(post.modified) }}</Badge>
            </div>

            <div class="space-y-4">
                <div v-if="postContent !== ''">
                    <div v-html="postContent"></div>
                </div>
                <div v-else>
                    <p>Loading...</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Skeleton from 'primevue/skeleton';
import Divider from 'primevue/divider';
import Badge from 'primevue/badge';

const route = useRoute();
const post = ref(null);
const postContent = ref('');
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
    const projectId = route.params.id;
    try {
        const response = await fetch(`https://waterdirectory.ir/wp-json/wp/v2/posts/${projectId}`);
        if (!response.ok) throw new Error('Could not fetch notes!');
        const data = await response.json();
        post.value = data;
        postContent.value = data.content.rendered;
    } catch (err) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
});

function formatDate(dateString) {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleString('en-US', {
        // weekday: 'long', // e.g. "Tuesday"
        year: 'numeric',
        month: 'long',   // e.g. "April"
        day: 'numeric',  // e.g. "1"
        // hour: '2-digit',
        // minute: '2-digit',
        // second: '2-digit'
    });
}
</script>