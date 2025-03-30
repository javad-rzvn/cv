<template>
    <article>
        <div class="py-1">
            <div class="flex flex-col space-y-1.5">
                <div class="flex items-center justify-between gap-x-2 text-base">
                    <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold">
                        <a href="" class="hover:underline">{{ project }}</a>
                        <ul class="list-none p-0 hidden gap-x-1 sm:inline-flex">
                            <li>
                                <div
                                    class="inline-flex items-center rounded-md bg-gray-100 text-xs font-mono px-2 py-0.5 font-semibold transition-colors hover:bg-gray-50">
                                    Remote
                                </div>
                            </li>
                            <li>
                                <div
                                    class="inline-flex items-center rounded-md bg-gray-100 text-xs font-mono px-2 py-0.5 font-semibold transition-colors hover:bg-gray-50">
                                    Remote
                                </div>
                            </li>
                        </ul>
                    </h3>
                    <div class="text-sm text-gray-500">{{ date }}</div>
                </div>
                <h4 class="font-mono text-sm font-semibold">{{position}}</h4>
            </div>
            <div class="font-mono text-xs">
                Leading technical architecture of a blockchain-based film funding platform.
                <ul class="list-inside list-disc">
                    <li>Architecting migration from CRA to Next.js for improved performance, SEO, and DX</li>
                </ul>
            </div>
        </div>
    </article>
</template>

<script setup>
defineProps(['title', 'position', 'tags', 'date', 'description'])
</script>