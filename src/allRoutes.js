// src/router/allRoutes.js
import HomePage from './views/HomePage.vue';
import ProjectList from './views/ProjectList.vue';
import ProjectDetail from './views/ProjectDetail.vue';
import TechnicalNotes from './views/TechnicalNotes.vue';
import TechnicalDetail from './views/TechnicalDetail.vue';
import ResearchContributions from './views/ResearchContributions.vue';
import AwardsHonors from './views/AwardsHonors.vue';
import ConferencesWebinars from './views/ConferencesWebinars.vue';
import CoursesTaught from './views/CoursesTaught.vue';

const allRoutes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/awards',
        name: 'AwardsHonors',
        component: AwardsHonors,
        meta: { hideLayout: true },
    },
    {
        path: '/research-contributions',
        name: 'ResearchContributions',
        component: ResearchContributions,
        meta: { hideLayout: true },
    },
    {
        path: '/conferences-webinars',
        name: 'ConferencesWebinars',
        component: ConferencesWebinars,
        meta: { hideLayout: true },
    },
    {
        path: '/courses',
        name: 'CoursesTaught',
        component: CoursesTaught,
        meta: { hideLayout: true },
    },
    {
        path: '/notes',
        name: 'TechnicalNotes',
        component: TechnicalNotes,
        meta: { hideLayout: true },
    },
    {
        path: '/notes/:id',
        name: 'TechnicalDetail',
        component: TechnicalDetail,
        meta: { hideLayout: true },
    },
    {
        path: '/projects',
        name: 'ProjectList',
        component: ProjectList,
        meta: { hideLayout: true },
    },
    {
        path: '/projects/:id',
        name: 'ProjectDetail',
        component: ProjectDetail,
        props: true,
        meta: { hideLayout: true },
    },
];

export default allRoutes;