import { createRouter, createWebHashHistory , createWebHistory } from 'vue-router';
import allRoutes from './allRoutes';
// Import other route modules as needed

const routes = [
    ...allRoutes,
    // Spread in other route arrays
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;