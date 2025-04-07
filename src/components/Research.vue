<template>
    <div class="space-y-4 border rounded-md border-gray-200">
        <Accordion value="default">
            <AccordionPanel v-for="research in limitedResearchContributions" :key="research.title" :value="research.id">
                <AccordionHeader>
                    <div
                        class="inline-flex justify-between items-center gap-x-1.5 font-mono text-base font-bold text-black">
                        {{ research.title }}
                        <Badge :value="research.date" severity="secondary"></Badge>
                    </div>
                </AccordionHeader>
                <AccordionContent>
                    <p class="m-0 font-medium text-sm font-mono whitespace-pre-line text-justify xs:text-left">{{ research.description }}</p>
                    <ul class="list-inside list-disc text-xs font-mono">
                        <li v-for="(summary, index) in research.summaryList">{{ summary }}</li>
                    </ul>
                    <div class="flex mt-5 gap-x-2 xs:block">
                        <a v-if="research.link" :href="research.link"
                            class="inline-flex items-center text-[10px] font-mono bg-black rounded-md px-2 text-white m-0.5 xs:block xs:p-2 xs:text-center">View
                            Article</a>
                        <ul class="flex list-none flex-wrap gap-x-1 p-0">
                            <li v-for="(tag, index) in research.tags">
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
</template>


<script setup>
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge';
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import { computed } from 'vue';

const props = defineProps({
    limitedNum: Number, // Define the prop
});

import researchContributions from '../researchContributions.json';

const limitedResearchContributions = computed(() =>
    props.limitedNum ? researchContributions.slice(0, props.limitedNum) : researchContributions
);
</script>