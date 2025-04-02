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

// Update title based on route meta
router.beforeEach((to, from, next) => {
    const title = to.meta.title || 'Default Title'; // Default title if not defined
    document.title = title;
    next();
  });

export default router;