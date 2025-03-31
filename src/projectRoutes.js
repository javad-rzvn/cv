// src/router/projectRoutes.js
import HomePage from './views/HomePage.vue';
import ProjectList from './views/ProjectList.vue';
import ProjectDetail from './views/ProjectDetail.vue';

const projectRoutes = [
    {
        path: '/',
        component: HomePage,
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

export default projectRoutes;