import { createRouter, createWebHistory } from "vue-router";
import SignIn from './pages/SignIn.vue';
import SignUp from './pages/SignUp.vue';
import CompanyDashboard from './pages/Company.vue';
import FreelancerDashboard from './pages/Freelancer.vue';

const routes = [
    {
        path: '/',
        component: SignIn
    },
    {
        path: '/signup',
        component: SignUp
    },
    {
        path: '/company',
        component: CompanyDashboard
    },
    {
        path: '/freelancer',
        component: FreelancerDashboard
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;