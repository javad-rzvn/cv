<template>
    <article>
        <div class="py-1">
            <div class="flex flex-col space-y-1.5">
                <div class="flex items-center justify-between gap-x-2 text-base">
                    <h3 v-if="title" class="inline-flex items-center justify-center gap-x-1 font-semibold text-base xs:flex-2 xs:block xs:text-left">
                        <a v-bind="link ? { href: link } : {}" class="hover:underline">{{ title }}</a>
                        <ul class="list-none p-0 hidden gap-x-1 sm:inline-flex">
                            <li v-for="(tag, index) in tags">
                                <div class="inline-flex items-center rounded-md bg-gray-100
                                    text-xs font-mono px-2 py-0.5 font-semibold transition-colors hover:bg-gray-50">
                                    {{ tag }}
                                </div>
                            </li>
                        </ul>
                    </h3>
                    <div class="text-sm text-gray-500 font-mono xs:flex-1">{{ date }}</div>
                </div>
                <h4 class="font-mono text-sm font-semibold">{{ position }}</h4>
            </div>
            <div class="font-mono text-xs">
                {{ description }}
                <ul class="list-inside list-disc">
                    <li v-for="(summary, index) in summaryList">{{ summary }}</li>
                </ul>
            </div>
        </div>
    </article>
</template>

<script setup>
defineProps({
    link: String,
    title: String,
    position: String,
    date: String,
    description: String,
    tags: Array,
    summaryList: Array
})
</script>