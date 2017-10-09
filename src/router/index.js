import Vue from 'vue';
import VueRouter from 'vue-router';
import Masonry from '@/components/Masonry';
import Details from '@/components/Details';
import About from '@/components/About';
import Whatever from '@/components/Whatever';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Masonry
    },
    {
        path: '/articles/:id',
        name: 'details',
        component: Details,
        props: (route) => ({ id: route.params.id })
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/what-ever',
        name: 'what-ever',
        component: Whatever
    },
];

/* eslint-disable no-new */
export default new VueRouter({
  routes,
  mode: 'history',
});
