import { createRouter, createWebHistory } from "vue-router";
import MainRoutes from "./MainRoutes";
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: "/auth/login2",
      component: () => import("@/views/authentication/auth2/Login.vue"),
      meta: { requiresAuth: false },
    },

    {
      path: "/auth/register2",
      component: () => import("@/views/authentication/auth2/Register.vue"),
      meta: { requiresAuth: false },
    },

    {
      path: "/auth/forgot-password2",
      component: () => import("@/views/authentication/auth2/ForgotPassword.vue"),
      meta: { requiresAuth: false },
    },

    {
      path: "/auth/two-step2",
      component: () => import("@/views/authentication/auth2/TwoSteps.vue"),
      meta: { requiresAuth: false },
    },




    ...MainRoutes,

  ],
});
