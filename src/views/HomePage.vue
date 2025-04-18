<template>
  <div class="space-y-8">
    <section class="flex min-h-0 flex-col gap-y-3">
      <h2 class="text-xl font-bold">Work Experience</h2>
      <div class="space-y-4">
        <WorkExperience v-for="work in workExperiences" :key="work.id" :link="work.link" :title="work.title"
          :position="work.position" :date="work.date" :description="work.description" :tags="work.tags"
          :summaryList="work.summaryList" />
      </div>
    </section>

    <Divider />

    <section class="flex min-h-0 flex-col gap-y-3">
      <h2 class="text-xl font-bold">Eduation</h2>
      <div class="space-y-4">
        <Education title="Ferdowsi University of Mashhad"
          description="Bachelor of Science in Water Science and Engineering" date="1394" />

        <Education title="Ferdowsi University of Mashhad"
          description="Master of Science in Water Science and Engineering – Irrigation and Drainage" date="1398" />
      </div>

      <Fieldset legend="Master Thesis">
        <p class="text-justify">
          <b>
            Developing a mathematical relationship to quantify the precipitation effect on aquifer renewability (using
            Budyko framework)
          </b>
        </p>
        <p class="m-0 text-justify">
          This thesis aims to develop a drought index to identify regional hydrological drought based on meteorological
          data, as well as develop a mathematical relationship to quantify the impact of precipitation on renewability.
          The study area is the Central Valley in California, chosen due to the long time series meteorological data
          available from the C2VSim model which covers October 1921 to September 2009. The model outputs daily
          temperature, precipitation, and renewability data which are used to calculate various drought indices
          including SPI, SPEI, RDI and weighted versions of these indices across different timescales from 5 days to 1
          month. Regression analysis is then used to develop a relationship between the weighted drought indices and
          renewability, in order to estimate renewability based on the precipitation. The results show weighted SPEI
          performs best, with the 15 day timescale having the highest R-squared value. The final equation uses the 15
          day weighted SPEI to estimate annual renewability. Overall, the thesis demonstrates the potential to estimate
          renewability using a precipitation-based drought index, providing an alternative simpler approach compared to
          complex water balance calculations.
        </p>
      </Fieldset>
    </section>

    <Divider />

    <section class="flex min-h-0 flex-col gap-y-3">
      <h2 class="text-xl font-bold">Research & Contributions</h2>
      <Research :limitedNum="5" />
    </section>

    <Divider />

    <section class="flex min-h-0 flex-col gap-y-3">
      <h2 class="text-xl font-bold">Awards and Honors</h2>
      <Awards />
    </section>

    <Divider />

    <section class="flex min-h-0 flex-col gap-y-3">
      <h2 class="text-xl font-bold">Stack & Specialties</h2>
      <div class="space-y-4">
        <Skill :skills="[
          'Python', 'FastAPI', 'Flask', 'Hydrology', 'Power BI', 'Wordpress Developer', 'PHP',
          'ArcMap', 'QGIS', 'Excel', 'Remote Sensing', 'Data Processing', 'Web Scraping', 'GeoPandas', 'Pandas',
          'Playwright', 'Phaser', 'Node.js', 'Vue.js', 'Jupyter', 'Marimo', 'Rasterio', 'Bootstrap', 'MySQL', 'SQlite',
          'SQL Server', 'redis', 'Photoshop', 'Google Colab', 'Computer Vision', 'JavaScript', 'WEAP', 'SPSS'
        ]" />
      </div>
    </section>
  </div>

  <Divider />

  <section class="flex min-h-0 flex-col gap-y-3">
    <h2 class="text-xl font-bold">Projects</h2>
    <div class="grid grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-2">
      <SideProject v-for="project in featuredProjects" :key="project.id" :id="project.id" :title="project.title"
        :status="project.status" :description="project.description" :tags="project.tags" />
    </div>
  </section>
</template>

<script setup>
import WorkExperience from '../components/WorkExperience.vue'
import Education from '../components/Education.vue'
import Skill from '../components/Skill.vue'
import SideProject from '../components/SideProject.vue'
import Awards from '../components/Awards.vue'
import Research from '../components/Research.vue'
import Divider from 'primevue/divider';
import Fieldset from 'primevue/fieldset';

import projects from '../projects.json';
import workExperiences from '../workExperiences.json';

const limitedProjects = projects.slice(0, 6);
const featuredProjects = limitedProjects.filter(project => project.isFeatured === true);
</script>