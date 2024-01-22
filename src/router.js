import { createRouter, createWebHistory } from "vue-router";
import SignIn from './components/pages/SignIn.vue';
import SignUp from './components/pages/SignUp.vue';

const routes = [
    {
        path: '/',
        component: SignIn
    },
    {
        path: '/signup',
        component: SignUp
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;