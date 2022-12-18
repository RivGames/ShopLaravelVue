import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import RequestPassword from "../views/RequestPassword.vue";

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path:'/request-new-password',
        name:'requestnewpassowrd',
        component: RequestPassword
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
