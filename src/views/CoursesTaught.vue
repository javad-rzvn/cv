<template>
    <section class="flex min-h-0 flex-col gap-y-3">
        <h1 class="text-2xl font-bold">Courses Taught</h1>
        <div class="space-y-4 border rounded-md border-gray-200">
            <Accordion value="default">
                <AccordionPanel v-for="course in coursesTaught" :key="course.title" :value="course.id">
                    <AccordionHeader>
                        <div
                            class="inline-flex justify-between items-center gap-x-1.5 font-mono text-base font-bold text-black">
                            {{ course.title }}
                            <Badge :value="course.date" severity="secondary"></Badge>
                        </div>
                    </AccordionHeader>
                    <AccordionContent>
                        <p class="m-0 font-medium text-sm font-mono whitespace-pre-line text-justify">{{
                            course.description }}</p>
                        <ul class="list-inside list-disc text-xs font-mono">
                            <li v-for="(summary, index) in course.summaryList">{{ summary }}</li>
                        </ul>
                        <div class="flex mt-5 gap-x-2">
                            <ul class="flex list-none flex-wrap gap-x-1 p-0">
                                <li v-for="(tag, index) in course.tags">
                                    <div class="inline-flex items-center rounded-md font-semibold font-mono transition-colors px-1 py-1
                            bg-neutral-100 hover:bg-neutral-50 text-[10px]">
                                        {{ tag }}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>
    </section>
</template>

<script setup>
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

import coursesTaught from '../coursesTaught.json';
</script>