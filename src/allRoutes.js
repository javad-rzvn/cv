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
        meta: {title: 'Mohammad Javad Rezvanpour - Resume'}
    },
    {
        path: '/awards',
        name: 'AwardsHonors',
        component: AwardsHonors,
        meta: { hideLayout: true, title: 'Mohammad Javad Rezvanpour - Awards & Honors' },
    },
    {
        path: '/research-contributions',
        name: 'ResearchContributions',
        component: ResearchContributions,
        meta: { hideLayout: true, title: 'Mohammad Javad Rezvanpour - Research & Contributions' },
    },
    {
        path: '/conferences-webinars',
        name: 'ConferencesWebinars',
        component: ConferencesWebinars,
        meta: { hideLayout: true, title: 'Mohammad Javad Rezvanpour - Conferences, Webinars & Events' },
    },
    {
        path: '/courses',
        name: 'CoursesTaught',
        component: CoursesTaught,
        meta: { hideLayout: true, title: 'Mohammad Javad Rezvanpour - Courses Taught' },
    },
    {
        path: '/notes',
        name: 'TechnicalNotes',
        component: TechnicalNotes,
        meta: { hideLayout: true, title: 'Mohammad Javad Rezvanpour - Technical Notes' },
    },
    {
        path: '/notes/:id',
        name: 'TechnicalDetail',
        component: TechnicalDetail,
        meta: { hideLayout: true, title: 'Mohammad Javad Rezvanpour - Technical Note' },
    },
    {
        path: '/projects',
        name: 'ProjectList',
        component: ProjectList,
        meta: { hideLayout: true, title: 'Mohammad Javad Rezvanpour - Projects' },
    },
    {
        path: '/projects/:id',
        name: 'ProjectDetail',
        component: ProjectDetail,
        props: true,
        meta: { hideLayout: true, title: 'Mohammad Javad Rezvanpour - Project Details' },
    },
];

export default allRoutes;