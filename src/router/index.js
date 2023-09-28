import { createRouter, createWebHistory } from 'vue-router';
import dashboardView from '../views/dashboard.vue';
import overView from '../views/overview.vue';
import defaultLayout from '../layouts/default.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: defaultLayout,
      children: [
        {
            path: "/",
            name: "dashboard",
            component: dashboardView,
        },
        {
            path: "/overview",
            name: "overview",
            component: overView,
        },
      ]
    },
    
  ],
})

export default router;
