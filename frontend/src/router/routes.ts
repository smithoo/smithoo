const routes = [
    {
        path: '/',
        component: () => import('./../views/pages/Home.vue'),
    },
    {
        path: '/about',
        component: () => import('./../views/pages/about/About.vue'),
    },
];

export default routes;
