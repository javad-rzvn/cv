import { createRouter, createWebHistory } from 'vue-router';
import projectRoutes from './projectRoutes';
// Import other route modules as needed

const routes = [
    ...projectRoutes,
    // Spread in other route arrays
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;